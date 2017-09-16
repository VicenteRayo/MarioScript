var plataformas;

function crearPlataformas(){
	plataformas = new Array(1);
	plataformas[0] = new bloque({
		X : 0,
		Y : 197*coeficienteDibujo,
		Ancho : 256*coeficienteDibujo,
	});
	plataformas[1] = new bloque({
		X : 295*coeficienteDibujo,
		Y : 181*coeficienteDibujo,
		Ancho : 50*coeficienteDibujo,
	});
	plataformas[2] = new bloque({
		X : 390*coeficienteDibujo,
		Y : 133*coeficienteDibujo,
		Ancho : 110*coeficienteDibujo,
	});
	plataformas[3] = new bloque({
		X : 512*coeficienteDibujo,
		Y : 181*coeficienteDibujo,
		Ancho : 50*coeficienteDibujo,
	});
	plataformas[4] = new bloque({
		X : 560*coeficienteDibujo,
		Y : 117*coeficienteDibujo,
		Ancho : 80*coeficienteDibujo,
	});

	}

function bloque(constructor_Bloque){	//Clase Bloque()
	this.X = constructor_Bloque.X;
	this.Y = constructor_Bloque.Y;
	this.Ancho = constructor_Bloque.Ancho;
}	