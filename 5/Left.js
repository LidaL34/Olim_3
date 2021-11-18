class LeftPlayer {
    constructor(x, y, base, altura){
    this.x = x;
    this.y = y;
    this.base = base;
    this.altura = altura;
    
    }
    pintar(){
        noStroke();
        fill(255);
        rect(this.x, this.y, this.base, this.altura);
    }
    mover(){
       if(keyIsPressed) {
        switch(key){
            case 'w':  //Arriba
                this.y -= 8;
                break;
            case 's':  //Abajo
                this.y += 8;
                break;
        }
        }
    }
    getX(){
        return this.x;
    }
    setX(x){
        this.x = x;
    }
    getY() {
        return this.y;
    }
    setY(y) {
        this.y = y;
    }
    getBase(){
        return this.base;
    }
    setBase(base){
        this.base = base;
    }
    getAltura(){
        return this.altura;
    }
    setBase(altura){
        this.altura = altura;
    }   
}