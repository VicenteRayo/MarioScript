var LEFT_KEY_PRESSED = false;
var UP_KEY_PRESSED = false;
var RIGHT_KEY_PRESSED = false;
var DOWN_KEY_PRESSED = false;
var velocidadMovimiento = 5;


//keydown
$(document.documentElement).keydown(function(event) {
    var keyCode = ('keyCode' in event) ? event.keyCode : event.which;
    if (keyCode == 37) LEFT_KEY_PRESSED = true;
    if (keyCode == 38){
		mario.Disfraz = 2;
		StartJump();
	}
    if (keyCode == 39) RIGHT_KEY_PRESSED = true;
    if (keyCode == 40) DOWN_KEY_PRESSED = true;
});
        
//keyup
$(document.documentElement).keyup(function(event) {
    var keyCode = ('keyCode' in event) ? event.keyCode : event.which;
    if (keyCode == 37){
		LEFT_KEY_PRESSED = false;
	}
	
    if (keyCode == 38){
		EndJump();
	}
	
    if (keyCode == 39){
		RIGHT_KEY_PRESSED = false;
	}
	
	if (keyCode == 40){
		DOWN_KEY_PRESSED = false;
	}
});

function process() {
            
    if (LEFT_KEY_PRESSED && fondo.X>= 0){								//Botón iquierda
		fondo.X -= velocidadMovimiento;
		if(fondo.X<0) fondo.X = 0;
	}
	if(LEFT_KEY_PRESSED && fondo.X <= 0 && mario.X > 0){
		mario.X -= velocidadMovimiento;
		if (mario.X <0) mario.X =0;
	}
	
    if (RIGHT_KEY_PRESSED && (mario.X >= anchoLienzo/3)) {		//Botón derecha
		fondo.X += velocidadMovimiento;
	}
	if (RIGHT_KEY_PRESSED && fondo.X <= 0 && mario.X > 0){
		mario.X += velocidadMovimiento;
	}
}