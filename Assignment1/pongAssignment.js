//TARA HEYDAR_2020_FALL_CSMA101_F1_ECHO THEOHAR_TARA.HEYDAR@WOODBURY.EDU

//variables for ball
var ballX = 10;
var ballY = 10;
var diameter = 50; //for collison
var directionX = 6;
var directionY = 7;
var score = 0;


//variables for Paddles
var rectX;
var rectY;
var rectW = 100;
var rectH = 25;

//set up paddle position
var started = false;



function setup(){
    createCanvas(800,800)
    
    
}


function draw(){
    background(100);
    
    //ball bounces off walls
    ballX = ballX + directionX;
    ballY = ballY + directionY;
    
    if(ballX < 0 || ballX > width){
        
        directionX = -directionX
    }
    
    if(ballY < 0 || ballY > height){
        
        directionY= -directionY
    }
    
    //dect collision with paddle
    if((ballX > rectX && ballX < rectX + rectW) && (ballY + (diameter/2) >= rectY)){
        directionX *= -1;
        directionY *= -1;
        score++;
        
        
    }
        
            
    //draw ball and paddle
    ellipse(ballX, ballY, diameter);
    rect(rectX, rectY, rectW, rectH);
    
    //Update paddle location on start
    if(!started){
        
        rectX = width/2;
        rectY = height -100;
        started = true;
        
    }
    
    //controlling paddle with arrow keys
    if(keyCode === LEFT_ARROW) {
        rectX -=5;
    } else if (keyCode === RIGHT_ARROW){
        rectX +=5;
    }
    
    fill(0, 100,255);
    textSize(24);
    text("Score: " + score, 10, 25);
    
    }