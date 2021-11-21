import bus from "@/eventBus.js";
import { Debounce } from "@/Utils/";
import loadingsrc from "@/image/circles.svg";

let imgs = [];

function islazyLoad(dom, src) {
  let cH = document.documentElement.clientHeight;
  let tH = dom.getBoundingClientRect();
  if (tH.top > -tH.height && tH.top < cH) {
    let img = document.createElement("img");
    img.onload = function () {
      dom.src = src;
    };
    img.src = src;
    dom.src = loadingsrc;
    return false;
  }

  return true;
}

function lazyHandle() {
  for (const k of imgs) {
    let isDel = islazyLoad(k.dom, k.src);
    if (!isDel) {
      imgs = imgs.filter((i) => i.dom !== k.dom);
    }
  }
}

const Deb = Debounce(lazyHandle, 100);
bus.$on("BlogList", Deb);

export default {
  inserted(el, binding) {
    let isAdd = islazyLoad(el, binding.value);
    if (isAdd) {
      imgs.push({
        dom: el,
        src: binding.value,
      });
    }
  },
  unbind(el) {
    imgs = imgs.filter((r) => r.dom === el);
  },
};
