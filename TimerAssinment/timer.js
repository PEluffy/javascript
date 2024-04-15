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
const button_predict = document.getElementById("startPrediction");
const URL = "https://teachablemachine.withgoogle.com/models/xM1I7vN_G/";

let model, webcam, labelContainer, maxPredictions;
// let stop = true;
// let start = false;
async function init() {
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  // load the model and metadata
  // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
  // or files from your local hard drive
  // Note: the pose library adds "tmImage" object to your window (window.tmImage)
  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  // Convenience function to setup a webcam
  const flip = true; // whether to flip the webcam
  webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
  await webcam.setup(); // request access to the webcam
  await webcam.play();
  window.requestAnimationFrame(loop);

  // append elements to the DOM
  // document.getElementById("webcam-container").appendChild(webcam.canvas); //mighht need
  labelContainer = document.getElementById("label-container");
  for (let i = 0; i < maxPredictions; i++) {
    // and class labels
    labelContainer.appendChild(document.createElement("div"));
  }
}
async function loop() {
  webcam.update(); // update the webcam frame
  await predict();
  window.requestAnimationFrame(loop);
}
async function predict() {
  // predict can take in an image, video or canvas html element
  const prediction = await model.predict(webcam.canvas);
  for (let i = 0; i < maxPredictions; i++) {
    const classPrediction =
      prediction[i].className + ": " + prediction[i].probability.toFixed(2);
    labelContainer.childNodes[i].innerHTML = classPrediction;
    const arrayPrediction = [...prediction];
    const highestPredicted = arrayPrediction.reduce(function (acc, curr) {
      return acc.probability > curr.probability ? acc : curr;
    }).className;
    handleClick(highestPredicted);
  }
}
function handleClick(idName) {
  console.log(idName);
  const button = document.getElementById(`${idName}`);
  console.log(button);
  if (button) {
    button.click();
  }
}
button_predict.addEventListener("click", init);

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
