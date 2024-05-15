class snake {
  constructor(x, y) {
    this.arrOfsnake = [
      {
        x: x,
        y: y,
      },
      {
        x: x + 10,
        y: y,
      },
    ];
    this.width = 10;
    this.height = 10;
  }
  drawSnake = function () {
    ctx.fillStyle = "rgb(200, 0, 0)";
    this.arrOfsnake.forEach((segment) => {
      ctx.fillRect(segment.x, segment.y, this.width, this.height);
    });
  };

  eatFoot() {
    function increaseSize() {}
  }

  move = function (key) {
    switch (key) {
      case "w":
        this.y = this.y + 10;
        break;
      case "a":
        this.x = this.x - 10;
        break;
      case "s":
        this.y = this.y - 10;
        break;
      case "d":
        this.x = this.x + 10;
        break;
    }
  };
}
