class Shape {
  constructor(text, canvasWidth, canvasHeight, context) {
    this.x = Math.floor(Math.random() * 100);
    this.y = Math.floor(Math.random() * 100);
    this.text = text;

    this.vx = 5;
    this.vy = 2;

    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.context = context;

    // //randomize colour :)
    this.colour = `rgba(
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)}
    )`;

    this.font = "60px Arial";
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  checkBounds() {
    if (this.x > this.canvasWidth || this.x < 0) {
      this.vx = this.vx * -1;
    }

    if (this.y > this.canvasHeight || this.y < 0) {
      this.vy = this.vy * -1;
    }
  }

  display() {
    this.context.fillText(this.text, this.x, this.y);
    this.context.fillStyle = this.colour;
    this.context.font = this.font;
  }

  update() {
    move();
    checkBound();
  }
}
