//TARA HEYDAR_2020_FALL_CSMA101_F1_ECHO THEOHAR_TARA.HEYDAR@WOODBURY.EDU

var img1, img2, img3, img4, totalSquares, x, y, desiredColor, c;

function preload(){
    
    img1 = loadImage("Data/zigzag1.jpg")
    img2 = loadImage("Data/zigzag2.jpg")
    img3 = loadImage("Data/zigzag3.jpg")
    img4 = loadImage("Data/zigzag4.jpg")
}



function setup(){
    createCanvas(500,500)
    background(100);
    
    //load image pixels
    img1.loadPixels();
    img2.loadPixels();
    img3.loadPixels();
    img4.loadPixels();
    
    //intialize values
    totalSquares = 20;
    y = 0;
    c = 3;
    
    
}

function draw(){
    
    //set square size based off total squares
    var squareSize = width/totalSquares;
    
    //draw squares
    var currentSquares = 0;
    
    //keeps square size proportional to width
    while(currentSquares < totalSquares){
        x = currentSquares * squareSize;

    
    //get color
    var desiredColor1 = getColor1();
    var desiredColor2 = getColor2();
    var desiredColor3 = getColor3();
    var desiredColor4 = getColor4();
    
    if(c>0){
        fill(desiredColor1);
        
    }
    
    if(c<0){
        fill(desiredColor2);
        
    }
    
    if(c<0){
        fill(desiredColor3);
        
    }
        
    if(c<0){
        fill(desiredColor4);
        
    }
    //draw ellipses
    square(x, y, squareSize);
    currentSquares++;
        
    }
    
    //move down a row
    y = y + squareSize;
    
    //start over at top
    if(y > 500){
        
    
    totalSquares = random(30, 80);
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

function getColor3(){
    
    var desiredColor3 = img3.get(floor(x), floor(y));
    return desiredColor3;
        
}

function getColor4(){
    
    var desiredColor4 = img4.get(floor(x), floor(y));
    return desiredColor4;
        
}