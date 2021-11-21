import styles from "@/style/loading.module.less";
import imgS from "@/image/circles.svg";

function isExists(el) {
  return el.querySelector("img[data-role=loading]");
}

function createImg() {
  const Img = document.createElement("img");
  Img.src = imgS;
  Img.className = styles["Img-container"];
  Img.dataset.role = "loading";
  return Img;
}

export default function (el, binding) {
  const curImg = isExists(el);
  if (binding.value === true) {
    if (!curImg) {
      let Img = createImg();
      if (window.getComputedStyle(el).position === "static") {
        el.style.position = "relative";
      }
      el.appendChild(Img);
    }
  } else curImg && curImg.remove();
}
