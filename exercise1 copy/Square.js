class Square {
  constructor(canvasWidth, canvasHeight, context) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = Math.floor(Math.random() * this.canvasWidth);
    this.y = Math.floor(Math.random() * this.canvasHeight);
    this.size = 10;
    this.maxSize = 200;

    this.vy = 1;

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

  checkCollision(mouseX, mouseY) {
    this.x2 = this.x + this.size;
    this.y2 = this.y + this.size;

    if (mouseX > this.x && mouseX < this.x2) {
      if (mouseY > this.y && mouseY < this.y2) {
        console.log("i touch you");
        if (this.size < this.maxSize) {
          this.size = this.size + 100;
        }

        this.vy = 0;
      }
    }
  }
}
