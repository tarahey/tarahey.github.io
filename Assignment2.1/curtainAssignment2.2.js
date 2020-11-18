//TARA HEYDAR_2020_FALL_CSMA101_F1_ECHO THEOHAR_TARA.HEYDAR@WOODBURY.EDU

var img1, img2, totalCircles, x, y, desiredColor, c;

function preload(){
    
    img1 = loadImage("Data/flower1.png")
    img2 = loadImage("Data/flower2.png")
}



function setup(){
    createCanvas(500,500)
    background(100);
    
    //load image pixels
    img1.loadPixels();
    img2.loadPixels();
    
    //intialize values
    totalCircles = 50;
    y = 0;
    c = 1;
    
    
}

function draw(){
    
    //set circle size based off total circles
    var circleSize = width/totalCircles;
    
    //draw circles
    var currentCircle = 0;
    
    //keeps circle size proportional to width
    while(currentCircle < totalCircles){
        x = currentCircle * circleSize;

    
    //get color
    var desiredColor1 = getColor1();
    var desiredColor2 = getColor2();
    
    if(c>0){
        fill(desiredColor1);
        
    }
    
    if(c<0){
        fill(desiredColor2);
        
    }
  
    
    //draw ellipses
    ellipse(x, y, circleSize);
    currentCircle++;
        
    }
    
    //move down a row
    y = y + circleSize;
    
    //start over at top
    if(y > 500){
        
    
    totalCircles = random(25, 75);
        c = -c;
        y = 0;
    }

}

function getColor1(){
    
    var desiredColor1 = img1.get(floor(x), floor(y));
    return desiredColor1;
    
}
    
function getColor2(){
    
    var desiredColor2 = img2.get(floor(x), floor(y));
    return desiredColor2;
        
}
    

        