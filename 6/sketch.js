let tank;
let aliens = [];
let bullets = [];
let looser = false;
let tankImage;
let alienImage;


function setup() {
  createCanvas(600, 600);

tankImage = loadImage("./Image/tank.png");
alienImage = loadImage("./Image/A.png");

  tank = new Tank(250,450,tankImage);
  for (let i = 0; i < 6; i++) {
    aliens.push(new Alien(random(30, 600), random(-50, 0),alienImage)); //Crear los Aliens
  }
}

function draw() {
  background(29,41,81);

  tank.show();
  for (let i = 0; i < aliens.length; i++) {
    aliens[i].show()
  }

  for (let i = 0; i < bullets.length; i++) {
    bullets[i].show();
    removeDeathBullets();
  }

  validateImpact();
  validateLost();

  if (looser === true) {
    fill(255);
    textSize(58);
    textAlign(CENTER);
    text('GAME OVER', 314, 340);
  }
}

function mousePressed() {

  bullets.push(new Bullet(tank.getX(), tank.getY()));

}

function keyPressed() {
  switch (key) {
    case 'ArrowRight':
      tank.move("RIGHT")
      break;
    case 'ArrowLeft':
      tank.move("LEFT")
      break;
  }
}

function removeDeathBullets() {
  for (let i = 0; i < bullets.length; i++) {
    if (!bullets[i].isAlive()) {
      bullets.splice(i, 1);
      break;

    }

  }
}

function validateImpact() {
  for (let i = 0; i < bullets.length; i++) {
    for (let j = 0; j < aliens.length; j++) {
      if (dist(bullets[i].getX(), bullets[i].getY(), aliens[j].getX(), aliens[j].getY()) < aliens[j].getTam() / 2) {
        aliens.splice(j, 1);
        console.log("impact");
      }
    }
  }
}

function validateLost() {
  for (let i = 0; i < aliens.length; i++) {
    if (aliens[i].getY() >= 600) {
      looser = true;
    }
  }
}