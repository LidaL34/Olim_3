let usuario1 = new Usuario(57, 136, 102, 178, 255, 242, 175, 159, 237, 64, 66, 251, 223, 98, true);
let usuario2 = new Usuario(375, 136, 178, 255, 102, 242, 175, 159, 249, 59, 183, 66, 33, 11, false);
let usuario3 = new Usuario(692, 136, 251, 223, 98, 213, 123, 70, 30, 144, 255, 0, 0, 0, false);
let usuario4 = new Usuario(1010, 136, 178, 102, 255, 242, 175, 159, 192, 239, 63, 0, 102, 204, true);

function setup() {
  createCanvas(1329, 600);
}

function draw() {
  background(255,229,204);
  usuario1.Pintar();
  usuario2.Pintar();
  usuario3.Pintar();
  usuario4.Pintar();
}