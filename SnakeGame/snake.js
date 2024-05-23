class snake {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tail = [{ x: this.x, y: this.y }];
    this.width = 10;
    this.height = 10;
    this.head = this.tail[0];
  }

  drawSnake() {
    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    drawGrid();
    this.tail.forEach((segment) => {
      var x = segment.x * 10;
      var y = segment.y * 10;
      ctx.fillRect(x, y, this.width, this.height);
    });
  }

  move(key) {
    switch (key) {
      case "w":
        this.head = { x: this.tail[0].x, y: this.tail[0].y - 1 };
        break;
      case "s":
        this.head = { x: this.tail[0].x, y: this.tail[0].y + 1 };
        break;
      case "a":
        this.head = { x: this.tail[0].x - 1, y: this.tail[0].y };
        break;
      case "d":
        this.head = { x: this.tail[0].x + 1, y: this.tail[0].y };
        break;
      default:
        return;
    }
    this.tail.unshift(this.head);
    console.log(this.tail);
    this.tail.pop();
    this.drawSnake();
  }
  checkIfSnakedied() {
    if (
      this.head.x < 0 ||
      this.head.x > ctx.canvas.width / this.width - 1 ||
      this.head.y < 0 ||
      this.head.y > ctx.canvas.height / this.height - 1
    ) {
      return true;
    } else {
      return false;
    }
  }
  eatsFood() {
    console.log(foodObject.x, foodObject.y);
    if (this.head.x === foodObject.x && this.head.y === foodObject.y) {
      this.tail.unshift({ x: foodObject.x, y: foodObject.y });
      foodObject = new food();
      return true;
    } else {
      return false;
    }
  }
}
