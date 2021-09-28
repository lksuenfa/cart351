class Square {
  constructor(canvasWidth, canvasHeight, context) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = Math.floor(Math.random() * this.canvasWidth);
    this.y = 0;
    this.size = 10;

    const ResetY = -100;
    this.vy = -5;
    // this.newY = undefined;

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

  // move() {
  //   //fall down
  //   let newY = (this.y += this.vy);
  //   this.setPoints(this.x, newY); // ERROR MSG this.setpoints is not a function
  //
  //   // if reach bottom of canvas return to top
  //   if (this.newY > this.canvasHeight) {
  //     this.newY = ResetY;
  //   }
  // }
}
