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
		X : 416*coeficienteDibujo,
		Y : 68*coeficienteDibujo,
		Ancho : 78*coeficienteDibujo,
	});
	plataformas[3] = new bloque({
		X : 390*coeficienteDibujo,
		Y : 133*coeficienteDibujo,
		Ancho : 110*coeficienteDibujo,
	});
	plataformas[4] = new bloque({
		X : 505*coeficienteDibujo,
		Y : 181*coeficienteDibujo,
		Ancho : 50*coeficienteDibujo,
	});
	plataformas[5] = new bloque({
		X : 550*coeficienteDibujo,
		Y : 117*coeficienteDibujo,
		Ancho : 80*coeficienteDibujo,
	});
	plataformas[6] = new bloque({
		X : 640*coeficienteDibujo,
		Y : 53*coeficienteDibujo,
		Ancho : 110*coeficienteDibujo,
	});
	plataformas[7] = new bloque({
		X : 801*coeficienteDibujo,
		Y : 197*coeficienteDibujo,
		Ancho : 62*coeficienteDibujo,
	});
	plataformas[8] = new bloque({
		X : 961*coeficienteDibujo,
		Y : 70*coeficienteDibujo,
		Ancho : 62*coeficienteDibujo,
	});
	plataformas[9] = new bloque({
		X : 944*coeficienteDibujo,
		Y : 197*coeficienteDibujo,
		Ancho : 78*coeficienteDibujo,
	});
plataformas[10] = new bloque({
		X : 1040*coeficienteDibujo,
		Y : 197*coeficienteDibujo,
		Ancho : 78*coeficienteDibujo,
	});
	plataformas[11] = new bloque({
		X : 1121*coeficienteDibujo,
		Y : 135*coeficienteDibujo,
		Ancho : 45*coeficienteDibujo,
	});
	plataformas[12] = new bloque({
		X : 1216*coeficienteDibujo,
		Y : 85*coeficienteDibujo,
		Ancho : 95*coeficienteDibujo,
	});

	}

function bloque(constructor_Bloque){	//Clase Bloque()
	this.X = constructor_Bloque.X;
	this.Y = constructor_Bloque.Y;
	this.Ancho = constructor_Bloque.Ancho;
}	