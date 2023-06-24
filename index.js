const a = document.querySelector(".hour");
const b = document.querySelector(".minute");
const c = document.querySelector(".second");
const d = document.querySelector(".ampm");

function updatedate() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";
  if (h > 12) {
    h -= 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  a.textContent = h;
  b.textContent = m;
  c.textContent = s;
  d.textContent = ampm;
  setTimeout(() => {
    updatedate();
  }, 1000);
}
updatedate();
