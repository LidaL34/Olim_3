class Alien {
    constructor(x, y,image) {
        this.x = x;
        this.y = y;
        this.r = random(0, 255);
        this.g = random(0, 255);
        this.b = random(0, 255);
        this.tam = 100;
        this.fall = false;
        this.die = false;

        this.image = image
    }

    show() {

        image(this.image, this.x, this.y,this.tam,50); 
      
        this.move();
    }

    move() { 
        
        //Aliens Caen

        if (this.fall === false) {
            this.y += random(0.1, 1);
        }
    }

    die() {
        this.die = true;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getTam() {
        return this.tam;
    }
}