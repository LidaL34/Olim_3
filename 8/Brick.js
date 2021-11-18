class Brick extends Paddle {
  constructor(x, y, w, h,) {
    super(x, y ,w, h);
  }
  
  //Render Bricks
  render() {
    push();
    strokeWeight(1);
    stroke(0);
    fill(102,255,204);
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, this.width-2, this.height-2);
    pop();   
  }
}