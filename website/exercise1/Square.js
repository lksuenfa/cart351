class Square {
  constructor(canvasWidth, canvasHeight, context) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.context = context;

    this.x = Math.floor(Math.random() * this.canvasWidth);
    this.y = Math.floor(Math.random() * this.canvasHeight);
    this.size = 30;
    this.maxSize = 40;

    this.vy = 1; //speed

    // //randomize colour :)
    this.colour = `rgba(
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)}
    )`;
  }

  draw() {
    // fill rectangle with random colour
    this.context.fillStyle = this.colour;
    // draw rectangle
    this.context.fillRect(this.x, this.y, this.size, this.size);
  }

  move() {
    //fall down
    this.y = this.y += this.vy;

    // if reach bottom of canvas return to top
    if (this.y > this.canvasHeight) {
      this.y = 0;

      // randomise new x position
      this.x = Math.floor(Math.random() * this.canvasWidth);
    }
  }

  checkCollision(mouseX, mouseY) {
    // define position of square's furthest point from origin (x,y)
    this.x2 = this.x + this.size;
    this.y2 = this.y + this.size;

    // if mouseX is more than x and less than x2 while being more than y and less than y2
    if (mouseX > this.x && mouseX < this.x2) {
      if (mouseY > this.y && mouseY < this.y2) {
        console.log("i touch you");
        // increase size of square
        if (this.size < this.maxSize) {
          this.size = this.maxSize;
        }
        // stop square
        this.vy = 0;
      }
    }
  }
}
