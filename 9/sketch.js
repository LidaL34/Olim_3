let carritos = [];
let carritoMain;

let puntajes;

function setup(){
    createCanvas(600,400);

    //Carros
    carritos[0] = new Carritos(200,180,80,50);
    carritos[1] = new Carritos(50,278,80,50);
    carritos[2] = new Carritos(500,278,80,50);
    carritos[3] = new Carritos(0,80,80,50);
    carritos[4] = new Carritos(250,80,80,50);

    //Main car
    carritoMain = new mainCar(0,180,80,50);

    //puntaje
    puntajes = 0;
    
}

function draw(){
    background(38,142,0);

    //Carriles
    fill(120,120,120);
    rect(0,50,600,300);

    //lineas Grises
    noStroke();
    fill(64,64,64);
    rect(0,50,600,8);

    fill(64,64,64);
    rect(0,350,600,8);
    
    //lineas Amarillas
    fill(225,225,0);
    rect(0,150,600,5);

    fill(225,225,0);
    rect(0,250,600,5);
    
  
   
    


    //Carrito 
    for (let index = 0; index < carritos.length; index++) {
        carritos[index].dibujar();
        carritos[index].move();

    //Choque
        let distCar = dist(carritos[index].getPosX +80,carritos[index].getPosY, carritoMain.getPosX+80, carritoMain.getPosY);
        if(distCar < 60){
            carritoMain.setPosX = 0;
        }
    }
    carritoMain.dibujar();
    if(carritoMain.getPosX == 600){
        puntajes = puntajes + 10;
        carritoMain.setPosX = 0;
        carritoMain.setPosY= 180;
    }

    textSize(20);
    fill(255);
    text("Puntaje: "+ puntajes, 35,30);
    
}

function keyPressed(){
    carritoMain.movements(keyCode);
}