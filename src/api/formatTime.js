export default function Time(t, showTime = false) {
  let n = new Date(+t);
  let temp = "";
  if (showTime) {
    temp =
      " " +
      revert(n.getHours()) +
      ":" +
      revert(n.getMinutes()) +
      ":" +
      revert(n.getSeconds());
  }
  return (
    n.getFullYear() +
    "-" +
    revert(n.getMonth() + 1) +
    "-" +
    revert(n.getDate()) +
    temp
  );
}

function revert(n) {
  return ("0" + n).slice(-2);
}
