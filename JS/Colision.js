var caida;

function pisaBloque(){
	var seCae = false;
	

	for (i=0 ;i<plataformas.length;i++){
		//floor = plataformas[i].Y;
		//console.log("marioX + fondoX= " + (mario.X+fondo.X) + "   plataformaX = " + plataformas[0].X + "   anchoPlataforma = " + (plataformas[0].X + plataformas[0].Ancho));
		//console.log("marioY = "+(mario.Y+mario.Alto)+"   plataformas[0].Y = "+plataformas[0].Y);
		if( ((mario.X + mario.Ancho + fondo.X) > plataformas[i].X) && (mario.X + fondo.X < (plataformas[i].X + plataformas[i].Ancho) ) && (mario.Y+mario.Alto-2) <= (plataformas[i].Y)){
			floor = caida = plataformas[i].Y-mario.Alto;
			seCae = false;
			break;
		}else{
			if(!saltando) seCae = true;
		}
	}
	
	if(seCae){
		caida += 8;
		console.log("se cae");
		mario.Y = caida;
		saltando= true;
	}
}