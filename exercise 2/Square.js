class Square {
  constructor(x, y, color, context) {
    this.x = x;
    this.y = y;
    this.size = 10;
    this.fill = color;
    this.context = context;
  }
  display() {
    this.context.fillStyle = this.fill;
    this.context.rotate((40 * Math.PI) / 180);
    this.context.fillRect(this.x, this.y, this.size, this.size);
  }
}