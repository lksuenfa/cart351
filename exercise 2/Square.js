class Square {
  constructor(size, canvasWidth, canvasHeight, context) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    // create a margin where squares won't appear
    this.x = 50 + Math.floor(Math.random() * (this.canvasWidth - 100));
    this.y = 50 + Math.floor(Math.random() * (this.canvasHeight - 100));
    this.size = size;
    this.context = context;

    this.speed = 1;
  }
  display() {
    this.context.fillStyle = `rgb(255,0,0)`;
    this.context.fillRect(this.x, this.y, this.size, this.size);
  }

  grow() {
    this.size = this.size * 5;
    this.context.fillRect(this.x, this.y, this.size, this.size);
  }
  shrink() {
    this.size = 10;
    this.context.fillRect(this.x, this.y, this.size, this.size);
  }
  displayGreen() {
    this.context.fillStyle = `rgb(0,255,0)`;
    this.context.fillRect(this.x, this.y, this.size, this.size);
  }

  displayBlue() {
    this.context.fillStyle = `rgb(66, 135, 245)`;
    this.context.fillRect(this.x, this.y, this.size, this.size);
  }

  displayYellow() {
    this.context.fillStyle = `rgb(245, 200, 66)`;
    this.context.fillRect(this.x, this.y, this.size, this.size);
  }
  displayMint() {
    this.context.fillStyle = `rgb(66, 245, 227)`;
    this.context.fillRect(this.x, this.y, this.size, this.size);
  }
}
