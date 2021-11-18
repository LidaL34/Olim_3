
let cuadros =[[0,0,0],
[0,0,0],
[0,0,0]];
let turno = true; // true --> 1 | false --> 2

function setup() {
createCanvas(900, 1000);
}

function draw() {
background(255);
noStroke();
fill(249, 178, 51);
textSize(100);
text('Triqui', 270, 150);
noFill();

for(let i = 0; i < 3; i++) {
for(let j = 0; j < 3; j++) {
let x = 100 + i*200;
let y = 197 + j*200;

switch (cuadros[j][i]) {
case 0:
fill(255);
break;


//X
case 1:
textSize(160);
stroke(120, 100, 800);
fill(120, 100, 800);
text("X",150 + i*200,355 + j*200);  
noFill();
break;


//O
case 2:
stroke(70,25,80);
strokeWeight(14);
circle(200 + i*200, 297 + j*200, 100);
noFill();
break;      
default:
break;
}


//casillas
stroke(0);

strokeWeight(6);
rect(x,y,200,200);
}
}
checkWinner();
}

function checkWinner() {
//filas i
opt1 = (cuadros[0][0] == cuadros[0][1]) && (cuadros[0][1] == cuadros[0][2]) && cuadros[0][0] != 0;
opt2 = (cuadros[1][0] == cuadros[1][1]) && (cuadros[1][1] == cuadros[1][2]) && cuadros[1][0] != 0;
opt3 = (cuadros[2][0] == cuadros[2][1]) && (cuadros[2][1] == cuadros[2][2]) && cuadros[2][0] != 0;
//columnas j
opt4 = (cuadros[0][0] == cuadros[1][0]) && (cuadros[1][0] == cuadros[2][0]) && cuadros[0][0] != 0;
opt5 = (cuadros[0][1] == cuadros[1][1]) && (cuadros[1][1] == cuadros[2][1]) && cuadros[0][1] != 0;
opt6 = (cuadros[0][2] == cuadros[1][2]) && (cuadros[1][2] == cuadros[2][2]) && cuadros[0][2] != 0;
//diagonales
opt7 = (cuadros[0][0] == cuadros[1][1]) && (cuadros[1][1] == cuadros[2][2]) && cuadros[0][0] != 0;
opt8 = (cuadros[2][0] == cuadros[1][1]) && (cuadros[1][1] == cuadros[0][2]) && cuadros[2][0] != 0;


if(opt1 || opt2 || opt3 || opt4 || opt5 || opt6 || opt7 || opt8) {
if(turno) {
noStroke();
fill(15, 230,76);
textSize(100);
text('¡Ganaste!',165, 900);



}else {
noStroke();
fill(15, 230,76);
textSize(100);
text('¡Ganaste!',165, 900);

}
}
else {
for (i = 0; i < cuadros.length; i++) {
for (j = 0; j < cuadros[i].length; j++) {
if(cuadros[i][j] == 0) {
}
}

}
noStroke();
fill(242, 80, 194);
textSize(100);
text('Empate', 210, 900);
}

}

function mousePressed() {
for(let i = 0; i < 3; i++) {
for(let j = 0; j < 3; j++) {
let x = 100 + i*200;
let y = 197 + j*200;
let valorActual = cuadros[j][i];
if(mouseX > x && mouseX < x + 200 && mouseY > y && mouseY < y + 200 && valorActual === 0 ){
if(turno){
cuadros[j][i] = 1;
}else{
cuadros[j][i] = 2;
}
turno=!turno;
}     
}
}
}