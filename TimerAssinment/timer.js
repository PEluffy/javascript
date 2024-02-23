const timer = document.getElementById("timer");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
let h = 0;
let m = 0;
let s = 0;
let interval;
const button_reset = document.getElementById("reset");
const button_start = document.getElementById("start");
const button_stop = document.getElementById("stop");
// let stop = true;
// let start = false;
button_start.addEventListener("click", () => {
  //   stop = false;
  //   start = true;
  button_start.disabled = true;
  button_stop.disabled = false;
  button_reset.disabled = false;
  //   if (start == true && stop == false) {
  interval = setInterval(() => {
    if (s < 59) {
      s = s + 1;
    } else if (m < 59) {
      s = 0;
      m = m + 1;
    } else {
      m = 0;
      h = h + 1;
    }
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
  }, 20);
  //   }
});
button_stop.addEventListener("click", () => {
  //   start = false;
  //   stop = true;
  button_start.disabled = false;
  button_stop.disabled = true;
  clearInterval(interval);
});

button_reset.addEventListener("click", () => {
  h = 0;
  m = 0;
  s = 0;
  hours.innerText = "00";
  minutes.innerText = "00";
  seconds.innerText = "00";
  clearInterval(interval);
  button_start.disabled = false;
  button_stop.disabled = true;
  button_reset.disabled = true;
});
