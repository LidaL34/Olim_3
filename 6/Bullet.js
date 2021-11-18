class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    
        this.alive = true;
        this.refAlien;
    }

    show() {
        fill(255);
        noStroke();
        rect (this.x, this.y,10,10);
        this.move();
    }

    move() {
        this.y--;
        if (this.y < 0) {
            this.alive = false;
        }
    }

    isAlive() {
        return this.alive;
    }


    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    


    
}