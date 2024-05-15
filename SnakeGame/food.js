class food {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 10;
    this.height = 10;

    this.drawFood = function (numberForX, numberForY) {
      ctx.fillStyle = "rgb(200, 0, 0)";
      ctx.fillRect(numberForX * 10, numberForY * 10, 10, 10);
    };
  }
}
