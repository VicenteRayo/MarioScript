var floor;
var velocityY = 0.0;
var gravity = 0.5;
var onGround = false;
var saltando = false


function StartJump(){
    if(onGround)
    {
        velocityY = -14.0;
        onGround = false;
		saltando = true;
    }
}

function EndJump(){
    if(velocityY < -7.0)
        velocityY = -7.0;
}

function Update(){
    velocityY += gravity;
    mario.Y += velocityY;
    if(mario.Y > floor)
    {
        mario.Y = floor;
        velocityY = 0.0;
        onGround = true;
		mario.Disfraz = 1;
		saltando = false;
    }
}

