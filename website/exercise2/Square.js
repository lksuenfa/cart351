class Square {
  constructor(canvasWidth, canvasHeight, context) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    // create a margin where squares won't appear
    this.x = 50 + Math.floor(Math.random() * (this.canvasWidth - 100));
    this.y = 50 + Math.floor(Math.random() * (this.canvasHeight - 100));

    this.size = 10;
    this.context = context;
    this.colorChoice = `rgb(255,0,0)`; //original red colour
  }
  display() {
    this.context.fillStyle = this.colorChoice;
    this.context.fillRect(this.x, this.y, this.size, this.size);
  }

  grow() {
    this.size = this.size * 3;
    this.context.fillRect(this.x, this.y, this.size, this.size);
  }

  displayGreen() {
    this.context.fillStyle = `rgb(0,255,0)`; //green
    this.context.fillRect(this.x, this.y, this.size, this.size);
  }

  displayBlue() {
    this.context.fillStyle = `rgb(66, 135, 245)`; //blue
    this.context.fillRect(this.x, this.y, this.size, this.size);
  }

  displayYellow() {
    this.context.fillStyle = `rgb(245, 200, 66)`; //yellow
    this.context.fillRect(this.x, this.y, this.size, this.size);
  }
  displayMint() {
    this.context.fillStyle = `rgb(66, 245, 227)`; //mint
    this.context.fillRect(this.x, this.y, this.size, this.size);
  }

  // reset to original colour and size
  reset() {
    this.size = 10;
    this.colorChoice = `rgb(255,0,0)`;
  }
}
