//TARA HEYDAR_2020_FALL_CSMA101_F1_ECHO THEOHAR_TARA.HEYDAR@WOODBURY.EDU

var colorTable;
var names = [];
var hueVal = [];
var myRating = [];
var sz = [];

function preload(){
    //load csv infor
    colorTable = loadTable("Assets/months.csv");
    
}

function setup(){
    
    createCanvas(1200, 600);
    colorMode(HSB, 260, 150, 100);
    noStroke();
    
    //call each column of our csv
    for(var i = 0; i<colorTable.getRowCount(); i++){
        
        names[i] = colorTable.getString(i,0);
        hueVal[i] = colorTable.getNum(i,1);
        myRating[i] = colorTable.getNum(i, 2);
        sz[i] = map(myRating[i], 1, 10, 100, 1000);
    }
}

function draw(){
    
    background(255);
    
    //draw text and visuals
    
    for(var i = 0; i < colorTable.getRowCount(); i++){
        fill(hueVal[i], 80, 80);
        rect(120 * (i+1), 200, sz[i]);
        
        //sz[i] = map(0, 0, 0, 10, 100);
        
        fill(0);
        textSize(0);
        text(names[i], 140 * (i+1), 595);

    }
    
}