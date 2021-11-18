let coche = [];
let posicionX;
let posicionY;


let ganar;

function preload() {


}

function setup() {
  createCanvas(600, 600);

  frameRate(60);

  ganar = false;

  posicionY = 275;
  posicionX = 15;

  arriba = false;
  abajo = false;
  izquierda = false;
  derecha = false;

  for (let i = 0; i < 4; i++) {


    coche.push(new Array(3));


    for (let j = 0; j < 3; j++) {

      if (i === 0 || i === 2) {

        coche[i][j] = new Coche(120 + (100 * i), 20 + (200 * j), 2);

      }
      if (i === 1 || i === 3) {

        coche[i][j] = new Coche(120 + (100 * i), 500 - (200 * j), 1);


      }
    }
  }
}

function draw() {
  background(255);

  if (ganar === true) {

  }
  if (ganar === false) {


    pintarFondo();
    for (let i = 0; i < 4; i++) {

      for (let j = 0; j < 3; j++) {

        coche[i][j].mostrar();
      }
    }

    personaje();


  }
  if (ganar === true) {
    if (mouseIsPressed) {
      ganar = false
    }

  }

}

function personaje() {

  fill(154, 146, 255);
  square(posicionX, posicionY, 40);

  if (arriba) {
    posicionY -= 3;
  }
  if (abajo) {
    posicionY += 3;
  }

  if (izquierda) {
    posicionX -= 3;
  }
  if (derecha) {
    posicionX += 3;
  }

  contacto();

  if (posicionX + 40 > 548) {

    posicionX = 15;
    posicionY = 275;
    ganar = true;
  }
}

function contacto() {

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {

      if (posicionY + 40 > coche[i][j].getRefCar() && posicionY < coche[i][j].getRefCar() + 80) {
        if (posicionX + 40 > 120 + (100 * i) && posicionX < 160 + (100 * i)) {

          posicionX = 15;
          posicionY = 275;

        }
      }
    }
  }
}

function pintarFondo() {


  fill(107,124,125);
  rect(0, 260, 80);

  fill(107,124,125);
  rect(80, 0, 424, 600);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 7; j++) {
      fill(255);

      rect(185 + (100 * i), 30 + (85 * j), 10, 40);


    }

  }
  rect(195 - 100, 5, 5, 590);
  rect(185 + (100 * 3), 5, 5, 590);
}

function keyPressed() {

  switch (key) {
    case "w":
    case "W":
      arriba = true;
      break;
    case "s":
    case "S":
      abajo = true;
      break;

    case "a":
    case "A":
      izquierda = true;
      break;
    case "d":
    case "D":
      derecha = true;
      break;

  }

}

function keyReleased() {

  switch (key) {
    case "w":
    case "W":
      arriba = false;
      break;
    case "s":
    case "S":
      abajo = false;
      break;

    case "a":
    case "A":
      izquierda = false;
      break;
    case "d":
    case "D":
      derecha = false;
      break;

  }

}
