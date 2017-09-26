var time = 300;
var start = new Date().getTime();
var puntos = '000000';

function comienzaTiempo(){
	setInterval(function(){
	time -=1;
	},1000);
	
}

function dibujaTextos(){
	
	canvas.fillStyle="white"; 
	canvas.font="bold 35px PixelEmulator"; 
	canvas.textAlign="right";
	canvas.fillText("TIME",anchoLienzo-(anchoLienzo*0.07),altoLienzo*0.05); 	//Tiempo
	canvas.fillText(time,anchoLienzo-(anchoLienzo*0.07),altoLienzo*0.05+30); 
	
	canvas.textAlign="left";
	canvas.fillText("MARIO",anchoLienzo*0.07,altoLienzo*0.05); 	//Puntos
	canvas.fillText(puntos,anchoLienzo*0.07,altoLienzo*0.05+30); 
	
	canvas.drawImage(AllImage, 6, 8, 13, 16, anchoLienzo*0.4, altoLienzo*0.035, mario.Ancho/1.5, mario.Alto/1.5);
	canvas.fillText("x",anchoLienzo*0.45,altoLienzo*0.05+30);
	canvas.fillText(vidas,anchoLienzo*0.5,altoLienzo*0.05+30);
}
