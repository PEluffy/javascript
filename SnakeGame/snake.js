function snake() {
  this.x = 20;
  this.y = 0;
  this.width = 10;
  this.height = 10;

  this.drawSnake = function () {
    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  function eatFoot() {
    function increaseSize() {}
  }
  function move() {
    function moveRight() {}
    function MoveLeft() {}
    function MoveUp() {}
    function moveDown() {}
  }
  function die() {}
}
