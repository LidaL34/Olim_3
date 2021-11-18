class Coche {

    constructor(x, y, carril) {

      this.dir = int(random(0, 2));
      this.y = y + (this.dir * 9);
      this.x = x;
      this.tamAnch = 40;
      this.tamLarg = 80;
  
  
      this.carril = carril;
     
    }
  
    mostrar() {
  
  // llantas del los carros
      noStroke();
      fill(40);
      square(this.x - 10, this.y + this.tamAnch / 5, this.tamAnch / 3);
      square(this.x + 37, this.y + this.tamAnch / 5, this.tamAnch / 3);
  
      square(this.x - 10, this.y + (this.tamLarg - (this.tamAnch / 2)), this.tamAnch / 3);
      square(this.x + 37, this.y + (this.tamLarg - (this.tamAnch / 2)), this.tamAnch / 3);
  
  //Color de los carros 
  stroke(0)
  strokeWeight(3)
      fill(13,137,141);
      rect(this.x, this.y, this.tamAnch, this.tamLarg);
  
      this.mover();

    }
  
    mover() {
  
      switch (this.carril) {
        case 1:
  
  
          this.y -= 2;
          if (this.y < -85) {
            this.y = int(random(605, 685));
          }
  
  
  
          break;
  
        case 2:
          this.y += 2;
  
          if (this.y > 605) {
            this.y = int(random(-180, -85));
  
          }
          break;
  
      }
  
    }
  
    getRefCar() {
      return this.y;
    }
  }