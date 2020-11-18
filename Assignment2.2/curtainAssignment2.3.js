//TARA HEYDAR_2020_FALL_CSMA101_F1_ECHO THEOHAR_TARA.HEYDAR@WOODBURY.EDU

var img1;
var img2;
var desiredColor;

function preload(){
    
    img1 = loadImage("Data/albers.jpg");
    img2 = loadImage("Data/albers2.jpg");
}


function setup(){
    createCanvas(400,400)
    background(100);
    
    //load image pixels
    img1.loadPixels();
    img2.loadPixels();

    
}

function draw(){
    
    //picking random point on x,y, turning from float to int
    var x = floor(random(width));
    var y = floor(random(height/2));
    
    //color operations
    var desiredColor = img1.get(x,y);
    
    //draw the ellipses
    noStroke();
    fill(desiredColor);
    ellipse(x,y,50);
    
    //picking random point on x,y, turning from float to int
    var x = floor(random(width));
    var y = floor(random(height/2));
    
    //color operations
    var desiredColor = img2.get(x,y);
    
    //draw the ellipses
    noStroke();
    fill(desiredColor);
    ellipse(x,y,50);
    
}