const time = document.getElementById("time");
const stopButton = document.getElementById("stop");
const startButton = document.getElementById("start");
function showTime() {
  const currentTime = new Date();
  const hrs = currentTime.getHours();
  const min = currentTime.getMinutes();
  const sec = currentTime.getSeconds();
  const clock = `${hrs}:${min}:${sec}`;
  time.innerText = clock;
}
let interval = setInterval(showTime, 1000);

stopButton.addEventListener("click", () => {
  clearInterval(interval);
});
startButton.addEventListener("click", () => {
  interval = setInterval(showTime, 1000);
});
