var cambioDibujo = 0;		//Controla el cambio de disfraz;
var direccion = true;		//Dirección hacia donde mira el personaje (true derecha y false izquierda)

function Mario(constructor_Mario){	//Clase personaje Mario Bross()
	this.X = constructor_Mario.X;
	this.Y = constructor_Mario.Y;
	this.Ancho = constructor_Mario.Ancho;
	this.Alto = constructor_Mario.Alto;
	this.Vida = constructor_Mario.Vida;
	this.Disfraz = constructor_Mario.Disfraz;
	this.Power = constructor_Mario.Power;
	
	
	this.dibujaMario = function(){	
		if(!RIGHT_KEY_PRESSED && !LEFT_KEY_PRESSED){
			cambioDibujo
			if(mario.Disfraz == 1){
				if(direccion){
					canvas.drawImage(AllImage, 6, 8, 13, 16, this.X, this.Y, this.Ancho, this.Alto);
				}else{
					canvas.drawImage(AllImage, 215, 8, 13, 16, this.X, this.Y, this.Ancho, this.Alto);
				}
			}
			if(mario.Disfraz == 2){
				if(direccion){
					canvas.drawImage(AllImage, 77, 8, 16, 16, this.X, this.Y, this.Ancho+10, this.Alto);
				}else{
					canvas.drawImage(AllImage, 138, 8, 16, 16, this.X, this.Y, this.Ancho+10, this.Alto);
				}
			}
		}
					
		if(RIGHT_KEY_PRESSED){
			direccion = true;
			if(mario.Disfraz == 1){
				if (cambioDibujo <7){
					canvas.drawImage(AllImage, 20, 8, 18, 16, this.X-10, this.Y, this.Ancho+21, this.Alto);
					cambioDibujo++;
				}else{
					canvas.drawImage(AllImage, 38, 8, 18, 16, this.X-10, this.Y, this.Ancho+20, this.Alto);
					cambioDibujo++;
					if(cambioDibujo == 14) cambioDibujo = 0;
				}
			}
			if(mario.Disfraz == 2){
				canvas.drawImage(AllImage, 77, 8, 16, 16, this.X, this.Y, this.Ancho+10, this.Alto);
			}
		}
		
		if(LEFT_KEY_PRESSED){
			direccion = false;
			if(mario.Disfraz == 1){
				if(cambioDibujo <7){
					canvas.drawImage(AllImage, 197, 8, 18, 16, this.X, this.Y, this.Ancho+21, this.Alto);
					cambioDibujo++;
				}else{
					canvas.drawImage(AllImage, 177, 8, 18, 16, this.X, this.Y, this.Ancho+20, this.Alto);
					cambioDibujo++;
					if(cambioDibujo == 14) cambioDibujo = 0;
				}
			}
			if(mario.Disfraz == 2){
				canvas.drawImage(AllImage, 138, 8, 16, 16, this.X, this.Y, this.Ancho+15, this.Alto);
			}
		}
		
	}
		
}

	
