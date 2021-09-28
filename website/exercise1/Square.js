class Square {
  constructor(size, canvasWidth, canvasHeight, context) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = Math.floor(Math.random() * this.canvasWidth);
    this.y = Math.floor(Math.random() * this.canvasHeight);
    this.size = size;

    this.vy = 5;

    this.context = context;

    // //randomize colour :)
    this.colour = `rgba(
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)}
    )`;
  }

  draw() {
    this.context.fillStyle = this.colour;
    this.context.fillRect(this.x, this.y, this.size, this.size);
  }

  move() {
    //fall down
    this.y = this.y += this.vy;

    // if reach bottom of canvas return to top
    if (this.y > this.canvasHeight) {
      this.y = 0;
    }
  }
}
