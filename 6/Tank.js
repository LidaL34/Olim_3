class Tank {
    constructor(x,y, image) {
        this.x = x;
        this.y = y;
        this.image = image
    }
    
    show() {

    image(this.image, this.x, this.y,120,120);
         
    }

    shoot() {
        return true;
    }
    
    move(dir) {
        switch (dir) {
            case "RIGHT":
                this.x += 50
                break;
            case "LEFT":
                this.x -= 50
                break;

        }

    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

}