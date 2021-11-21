let T = localStorage.getItem("title") ? localStorage.getItem("title") : "";

function storeSet(v) {
  v = v ? v + "-" : "";
  setTitle(v + T);
}

function siteTitle() {
  if (T === "") {
    setTitle(T);
  }
}

function routeSet(v) {
  v = v ? v + "-" : "";
  setTitle(v + T);
}

function setTitle(v) {
  document.title = v;
}

export default {
  storeSet: storeSet,
  routeSet: routeSet,
  siteTitle: siteTitle,
};
