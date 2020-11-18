var img;
var table;

var states = [];

function preload(){
    
    img = loadImage("Data/rainbowmap.jpg");
    table = loadTable("Assets/children.csv");
}

function setup(){
    createCanvas(img.width, img.height);
    colorMode(HSB, 360, 100, 100);
    
    var pct = [];
    var mappedSize = [];
//    var popul = [];
//    var pct2 = [];
//    var pct3 = [];
    
    for(var i = 0; i < table.getRowCount(); i++){
        states[i] = new States(table, i);
        pct[i] = states[i].pct;
    }
    
//  for(var i = 0; i < table.getRowCount(); i++){
//        states[i] = new States(table, i);
//        popul[i] = states[i].popul;
    }
    
    for(var i = 0; i < table.getRowCount(); i++){
        mappedSize[i] = map(states[i].pct, min(pct), max(pct), 10, 100);
    }
        
//    for(var i = 0; i < table.getRowCount(); i++){
//        mappedSize[i] = map(states[i].popul, min(popul), max(popul), 10, 100);
//        states[i].sz = mappedSize[i];
//    }
//}

function draw(){
    background(img);
    
    for(var i = 0; i < table.getRowCount(); i++){
        states[i].displayState();
        states[i].mouseHovered();
    }
}

function States(table, index){
    this.table = table;
    this.name = table.getString(index, 0);
    this.x = table.getNum(index, 1);
    this.y = table.getNum(index, 2);
    this.pct = table.getNum(index, 3);
    this.popul = table.getNum(index, 4);
//    this.pct2 = table.getNum(index, 5);
//    this.pct3 = table.getNumb(index, 6);
    this.hu = 255;
    this.sz = 25;
    
    //shows percentage of LGBT with children via ellipses
    this.displayState = function(){
        noStroke();
        fill(255, 70, 70);
        ellipse(this.x, this.y, this.sz, this.sz);
        
        //display state name at lat + lon
        noStroke();
        fill(10, 10, 10);
        textSize(15);
        textStyle();
        text(this.name, this.x + this.sz/2, this.y+30);
    }
    
    //rollover effect
    this.mouseHovered = function(){
     if(dist(mouseX, mouseY, this.x, this.y)<=this.sz/2){
         this.showInfo();
     }   
    }
    
    this.showInfo = function(){
        fill(this.hu, 70, 70, 20);
        ellipse(this.x, this.y, 200);
        fill(0);
        textSize(20);
        text(this.name + "\n" + "% w/ Children: " + "\n" + this.pct, this.x - 50, this.y - 25);
    }

//shows popul via rectangles
//    this.displayState = function(){
//        noStroke();
//        fill(150, 25, 25);
//        rect(this.x, this.y, this.sz, this.sz);
//        
//    }
//    
//    //rollover effect
//    this.mouseHovered = function(){
//     if(dist(mouseX, mouseY, this.x, this.y)<=this.sz/2){
//         this.showInfo();
//     }   
//    }
//    
//    this.showInfo = function(){
//        fill(this.hu, 70, 70, 20);
//        rect(this.x, this.y, 200);
//        fill(0);
//        textSize(20);
//        text(this.name + "\n" + "population: " + "\n" + this.pct, this.x - 50, this.y - 25 +50);
//        
//    }
}

//    //shows percentage of LGBT that are women via ellipse
//    this.displayState = function(){
//        noStroke();
//        fill(25, 200, 25);
//        rect(this.x, this.y, this.sz, this.sz);
//        
//    }
//    
//    //rollover effect
//    this.mouseHovered = function(){
//     if(dist(mouseX, mouseY, this.x, this.y)<=this.sz/2){
//         this.showInfo();
//     }   
//    }
//    
//    this.showInfo = function(){
//        fill(this.hu, 70, 70, 20);
//        rect(this.x, this.y, 200);
//        fill(0);
//        textSize(20);
//        text(this.name + "\n" + "% of females:  " + "\n" + this.pct, this.x + 65, this.y + 50);
//    }
//
//    //shows percentage of LGBT that are women via rect
//    this.displayState = function(){
//        noStroke();
//        fill(25, 200, 25);
//        rect(this.x, this.y, this.sz, this.sz);
//        
//    }
//    
//    //rollover effect
//    this.mouseHovered = function(){
//     if(dist(mouseX, mouseY, this.x, this.y)<=this.sz/2){
//         this.showInfo();
//     }   
//    }
//    
//    this.showInfo = function(){
//        fill(this.hu, 70, 70, 20);
//        rect(this.x, this.y, 200);
//        fill(0);
//        textSize(20);
//        text(this.name + "\n" + "% of males:  " + "\n" + this.pct, this.x + 65, this.y + 50);
//    }
