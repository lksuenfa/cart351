class UseText {
  constructor(text, canvasWidth, canvasHeight, context) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.context = context;

    this.text = text;
    this.x = Math.floor(Math.random() * this.canvasWidth);
    this.y = Math.floor(Math.random() * this.canvasHeight);

    this.vy = 1;

    this.colour = `#ffffff`; // white
  }

  draw() {
    this.context.fillStyle = this.colour;
    this.context.font = "60px Arial";
    this.context.fillText(this.text, this.x, this.y);
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
    this.textWidth = this.context.measureText(this.text); //width of text
    this.context.textBaseline = "top"; //set baseline to top
    this.textHeight = this.text.emHeightDescent; //distance between baseline and bottom of em square

    if (mouseX > this.x && mouseX < this.textWidth) {
      if (mouseY > this.y && mouseY < this.textHeight) {
        console.log("i touch you");
        this.colour = "#fc4e03"; //change colour to orange
        this.vy = 0; //stop moving
      }
    }
  }
}
