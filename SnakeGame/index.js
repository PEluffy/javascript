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
if (canvas.getContext) {
  ctx = canvas.getContext("2d");
}

let start = false;
let snakeObject = new snake();
let foodObject = new food();
button_start.addEventListener("click", () => {
  start = true;
  console.log("Game started!");
  snakeObject.drawSnake();
  const { x, y } = randomNumberGenerator(
    canvasHeightInGrids,
    canvasHeightInGrids
  );

  foodObject.drawFood(x, y);
});
