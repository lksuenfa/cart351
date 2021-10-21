class Cross {
  constructor(x, y, context) {
    this.x = x;
    this.y = y;
    this.w = 10;
    this.l = 30;
    this.fill = `rgb(255,0,0)`;
    this.context = context;

    this.speed = 1;
  }
  display() {
    this.context.fillStyle = this.fill;
    this.context.rotate((45 * Math.PI) / 180);
    this.context.fillRect(this.x, this.y, this.w, this.l);
    this.context.rotate((270 * Math.PI) / 180);
    this.context.fillRect(this.x, this.y, this.w, this.l);
  }

  move() {
    this.x += this.speed;
    this.y += this.speed;

    if (this.y > this.canvasHeight) {
      this.y -= this.speed;
    }

    // if reach bottom of canvas return to top
    if (this.x > this.canvasWidth) {
      this.x -= this.speed;
    }
  }
}
