var coeficienteDibujo;

function Fondo(){	//Clase Fondo()
	this.X = 0;					
	
	this.dibujaFondo = function(){	
		canvas.drawImage(BackgroundImage, -this.X, 0, anchoMapa * coeficienteDibujo, altoMapa*coeficienteDibujo);
	} 				
}