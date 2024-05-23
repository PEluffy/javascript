class food {
  constructor(x, y, genereateNewPosition) {
    this.width = 10;
    this.height = 10;
    this.genereateNewPosition();
  }

  genereateNewPosition() {
    const position = randomNumberGenerator(
      canvasWidthInGrids,
      canvasHeightInGrids
    );
    this.x = position.x;
    this.y = position.y;
  }
  drawFood = function () {
    ctx.fillStyle = "rgb(0, 0, 255)";
    ctx.fillRect(this.x * 10, this.y * 10, 10, 10);
  };
}
