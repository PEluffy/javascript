const canvas = document.getElementById("gameCanvas");
const button_start = document.getElementById("button_start");
const width_can = canvas.width;
const height_can = canvas.height;
const gridSize = 10;
const canvasWidthInGrids = width_can / gridSize;
const canvasHeightInGrids = height_can / gridSize;
let ctx;
let numberForX;
let numberForY;
let direction = ["w", "a", "s", "d"];
let currentDirection = "d";
if (canvas.getContext) {
  ctx = canvas.getContext("2d");
}
console.log(canvasHeightInGrids);
const { x: a, y: b } = randomNumberGenerator(
  canvasWidthInGrids,
  canvasHeightInGrids
);

let snakeObject = new snake(a, b); //creating snake object when game is started
let foodObject = new food(); //creating food object when game is started
let start = false;
drawGrid();

button_start.addEventListener("click", () => {
  start = true;
  if (start) {
    console.log("Game started!");
    gameInterval = setInterval(() => {
      snakeObject.move(currentDirection);
      if (snakeObject.checkIfSnakedied()) {
        start = false;
        alert("Game over");
        clearInterval(gameInterval);
        return;
      }
      snakeObject.drawSnake();
      foodObject.drawFood();
      console.log(snakeObject.eatsFood(foodObject));
    }, 600);
  }
});
addEventListener("keypress", function (event) {
  if (direction.includes(event.key)) {
    currentDirection = event.key;
    snakeObject.move(event.key);
  } else {
    console.error("plz make sure it is w, a, s or d");
  }
});

function drawGrid() {
  ctx.strokeStyle = "lightgrey";
  ctx.lineWidth = 0.5;

  for (let x = 0; x <= width_can; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height_can);
    ctx.stroke();
  }

  for (let y = 0; y <= height_can; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width_can, y);
    ctx.stroke();
  }
}
