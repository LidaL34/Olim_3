class Usuario {
    constructor(x, y, rFondo, gFondo, bFondo, rPiel, gPiel, bPiel, rRopa, gRopa, bRopa, rPelo, gPelo, bPelo, genero) {

        this.x = x;
        this.y = y;

        this.rFondo = rFondo;
        this.gFondo = gFondo;
        this.bFondo = bFondo;

        this.rPiel = rPiel;
        this.gPiel = gPiel;
        this.bPiel = bPiel;

        this.rRopa = rRopa;
        this.gRopa = gRopa;
        this.bRopa = bRopa;

        this.rPelo = rPelo;
        this.gPelo = gPelo;
        this.bPelo = bPelo;

        this.genero = genero;

    }

    Pintar() {

        noStroke();

        //Cuadrados del fondo
        fill(this.rFondo, this.gFondo, this.bFondo);
        rect(this.x, this.y, 262, 293, 42);

       
        //Mujer
        if (this.genero === true) { 
            fill(this.rPelo, this.gPelo, this.bPelo);
            rect(this.x + 30, this.y + 60, 47, 82, 44, 0, 20, 0); 
        }

        //Cuerpo
        fill(this.rPiel, this.gPiel, this.bPiel);
        ellipse(this.x + 67, this.y + 127, 20, 20); //Oreja izquierda
        ellipse(this.x + 191, this.y + 127, 20, 20); //Oreja derecha

    
        //Cara
        fill(this.rPiel, this.gPiel, this.bPiel);
        rect(this.x + 73, this.y + 47, 112, 148, 0, 0, 57, 57); //Cabeza

        fill(255);
        ellipse(this.x + 110, this.y + 112, 30,40); // Ojo izquierdo
        ellipse(this.x + 147, this.y + 112, 30,40); // Ojo derecho

        fill(0);
        ellipse(this.x + 110, this.y + 112, 20,30); // Ojo izquierdo
        ellipse(this.x + 147, this.y + 112, 20,30); // Ojo derecho

        fill(255);
        circle(this.x + 105, this.y + 120,10); 
        circle(this.x + 115, this.y + 106,7);

        circle(this.x + 143, this.y + 120,10);
        circle(this.x + 152, this.y + 106,7);

        fill(255);
        rect(this.x + 105, this.y + 153, 48, 21, 0, 0, 30, 30); //Boca

        fill(224,224,224);
        rect(this.x + 105, this.y + 160, 48, 4);



        //Cabello
        fill(this.rPelo, this.gPelo, this.bPelo);
        rect(this.x + 59, this.y + 35, 47, 65, 44, 0, 20, 0); //Capul
        rect(this.x + 105, this.y + 35, 93, 65, 0, 46, 0, 37); //Capul

        if (this.genero == false) {

        rect(this.x + 66, this.y + 100, 7, 30); //Patilla izquierda
        rect(this.x + 185, this.y + 100, 7, 30); //Patilla derecha

        }

        
        //Camiseta
        fill(this.rRopa, this.gRopa, this.bRopa);
        rect(this.x + 57, this.y + 200, 150, 95, 57, 57, 0, 0);

        //Cuello
        fill(this.rPiel, this.gPiel, this.bPiel);
        rect(this.x + 120, this.y + 187, 20, 35, 0, 0, 27, 27); 

        //Deco camisa
		fill(255);
		triangle(this.x + 130,this.y + 250 ,this.x + 100,this.y + 200,this.x + 160,this.y + 200);

        fill(224,224,224);
        rect (this.x +90, this.y + 260, 3,35);
        rect (this.x +170, this.y + 260, 3,35);











    }
}