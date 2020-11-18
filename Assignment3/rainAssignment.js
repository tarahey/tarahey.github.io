//TARA HEYDAR_2020_FALL_CSMA101_F1_ECHO THEOHAR_TARA.HEYDAR@WOODBURY.EDU

var rectangle = [];

function setup(){
    createCanvas(800, 600);


    for(var i = 0; i < 60; i++){
        rectangle[i] = new Rectangle(random(width), random(height), random(40, 60), random(1, 3), random(3, 6)); 
    }
}

function draw(){

    background(100,40,250);

    for(var i = 0; i < rectangle.length; i++){
        
        rectangle[i].drawRectangle();
        rectangle[i].fallRectangle();
        rectangle[i].resetRectangle();
    }
}


function Rectangle(rectangleX, rectangleY, rectangleSize, speedX, speedY){

    this.x = rectangleX;
    this.y = rectangleY;
    this.sz = rectangleSize;
    this.spX = speedX;
    this.spY = speedY;
    
    this.drawRectangle = function(){
        fill(200, 150);
        rect(this.x, this.y, this.sz);
    }

    this.fallRectangle = function(){

    this.y = this.y + this.spY;
    var y = map(this.y, 0, 20, 0, 0.1);
    this.spY = this.spY + y;
        
    if (this.y > height) {
      this.y = random(0, 0);
      this.spY = map(this.y, 0, 200, 4, 10);
    }

    }

    this.resetRectangle = function(){

        if(this.y < 0){
            this.y = height;
        }
    }
}

