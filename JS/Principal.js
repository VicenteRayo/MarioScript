var pantallaAncho;	//Recoge el valor del ancho del monitor
var pantallaAlto;	//Recoge el valor del alto del monitor
var anchoLienzo;	//Ancho en px del canvas
var altoLienzo;		//Alto en px del canvas
var anchoMapa = 2630;	//Ancho del mapa
var altoMapa = 220;		//Alto del mapa
var canvas;			//Objeto canvas
var BackgroundImage = new Image();		//Imagen del mapa
var AllImage = new Image();				//Sprite con todas las imagenes
var mario;		//		Objeto Mario Bross
var fondo;
var vidas = 3;

$(document).ready(function(){
	startFunction();
	comienzaTiempo();
	window.requestAnimationFrame(draw);
});

function startFunction(){
	pantallaAncho = screen.width;
	pantallaAlto = window.innerHeight || document.body.clientHeight
	$("#lienzo").attr("width", (pantallaAncho/100)*60-6);		//ancho automático para la zona de juego
	$("#lienzo").attr("height", (pantallaAlto/100)*80-5);		//alto del 60% para la zona de juego
	anchoLienzo = $("#lienzo").width();
	altoLienzo = $("#lienzo").height();
	floor = altoLienzo*0.81;
	canvas = document.getElementById("lienzo").getContext("2d");
	
	BackgroundImage.src = "./Resources/Images/map.png";
	AllImage.src = "./Resources/Images/sprite.png"
	coeficienteDibujo = altoLienzo / altoMapa;
	BackgroundImage.onload = function(){
		fondo = new Fondo();
	}
	mario = new Mario({
			X : anchoLienzo/3,
			Y : altoLienzo*0.81,
			Ancho : anchoLienzo/25,
			Alto : altoLienzo/12,
			Vida : vidas,
			Disfraz : 1,
			Power : 0
		});
	AllImage.onload = function(){
		mario.dibujaMario();
	}
	crearPlataformas();
	time = 300;
}

function draw(){
	fondo.dibujaFondo();
	process(fondo, mario);
	mario.dibujaMario();
	Update();
	pisaBloque();
	dibujaTextos();
	
	if(mario.Y > altoLienzo+mario.Alto){
		vidas--;
		startFunction();
	}
	//console.log("fondoX = "+fondo.X+"   marioX = "+mario.X);
	window.requestAnimationFrame(draw);
}

function sleep(milliseconds) {		//Función para que el hilo se retrase
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}






