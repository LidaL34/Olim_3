class Carritos{
    constructor(posX,posY,ancho,largo){
       this.posX = posX;
       this.posY = posY;
       this.ancho = ancho;
       this.largo = largo;
    }

    dibujar() {

    //Ruedas
    noStroke();
    fill(40);
    square(this.posX + 10, this.posY - 7, 10);
    square(this.posX + 10, this.posY + 47, 10);
    square(this.posX + 68, this.posY - 7, 10);
    square(this.posX + 68, this.posY + 47, 10);

    noStroke();
    fill(64, 64, 64);
    rect(this.posX,this.posY,this.ancho,this.largo);
    }

    move() {
        
        this.posX = this.posX - 1;
        if(this.posX <= 0) {
            this.posX = 600;
        }
    }

    get getPosX(){
        return this.posX;
    }
    
    get getPosY(){
        return this.posY;
    }
    get getancho(){
        return this.ancho;
    }
    
    get getlargo(){
        return this.largo;
    }

}