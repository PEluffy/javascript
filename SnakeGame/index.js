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
const { x: a, y: b } = randomNumberGenerator(
  canvasHeightInGrids,
  canvasHeightInGrids
);

let snakeObject = new snake(a, b); //creating snake object when game is started
let foodObject = new food(); //creating food object when game is started
let start = false;

button_start.addEventListener("click", () => {
  start = true;
  console.log("Game started!");
  console.log(snakeObject);
  snakeObject.drawSnake();
  const { x, y } = randomNumberGenerator(
    canvasHeightInGrids,
    canvasHeightInGrids
  );
  foodObject.drawFood(x, y);
});
addEventListener("keypress", function (event) {
  console.log(event.key);
  snakeObject.move(event.key);
});
