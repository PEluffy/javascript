"use strict";

let x = Math.floor(Math.random() * 20 + 1);
let highscore = 0;
document.querySelector(".check").addEventListener("click", game);
function game() {
  const y = Number(document.querySelector(".guess").value);
  console.log(y, x);
  if (y === 0 || y > 20 || y < 1) {
    document.querySelector(".message").textContent = "⛔wrong format";
  } else if (y === x) {
    document.querySelector(".message").textContent = "🎉Correct Number!";
    document.body.style.backgroundColor = "green";
    document.querySelector(".line1").textContent = y;
    document.querySelector(".line1").style.width = "400px";
    document.querySelector(".line1").style.left = "500px";
    if (Number(document.querySelector(".score").textContent) > highscore) {
      highscore = Number(document.querySelector(".score").textContent);
      document.querySelector(".highscore").textContent = Number(
        document.querySelector(".score").textContent
      );
    }
  } else {
    if (y != x) {
      if (y > x) {
        document.querySelector(".message").textContent = "guess lower number!";
      } else {
        document.querySelector(".message").textContent = "guess higher number!";
      }
      var T = Number(document.querySelector(".score").textContent);
      document.querySelector(".score").textContent = T - 1;
    }
  }
}
document.querySelector(".Again").addEventListener("click", Again);
function Again() {
  x = Math.floor(Math.random() * 20 + 1);
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".message").textContent = "🤔Start guessing.......";
  document.querySelector(".line1").style.width = "90px";
  document.querySelector(".line1").style.left = "700px";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".line1").textContent = "?";
  document.querySelector(".guess").value = "";
}
