class RedGhost extends Ghost{
    constructor(x, y, direction, image) {
        super(x, y, direction, image);
    }

    //Cambia la direccion 
    special() {
        if (frameCount % 90 == 0) {
            this.changeDirection();
        }
    }

    //Cambia la direccion 
    changeDirection() {
        this.direction = int(random(4));
    }

    //Diferentes posibles movimientos 
    move() {
        switch (this.direction) {
            case 0:
                this.y--; //ARRIBA
                break;
            case 1:
                this.y++; //ABAJO
                break;
            case 2:
                this.x++; //DERECHA
                break;
            case 3:
                this.x--; //IZQUIERDA
                break;
        }

    this.special();
    }
}