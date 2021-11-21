export default function (fn, duration = 200) {
  let TimeOut = "";
  return (...args) => {
    clearTimeout(TimeOut);
    TimeOut = setTimeout(function () {
      fn(...args);
    }, duration);
  };
}
