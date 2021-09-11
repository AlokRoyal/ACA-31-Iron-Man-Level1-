
var bg, backgroundImg;
var ironMan, ironManImg;
// var edges;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironManImg = loadImage("images/iron.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale = 2;
 
  ironMan = createSprite(460,300,20,50);
  ironMan.scale = 0.2;
  ironMan.addImage(ironManImg);

  edges = createEdgeSprites();
}

function draw() {

  if (ironMan.x>950){
    ironMan.x=950;
  }
  if (ironMan.x<0){
    ironMan.x=0;
  }
  if (ironMan.y>550){
    ironMan.y=550;
  }
  
  if (keyDown("up")){
    ironMan.velocityY = - 10;
  }
  
  if (keyDown("left")){
    ironMan.x = ironMan.x - 5;
  }
  
  if (keyDown("right")){
    ironMan.x = ironMan.x + 5;
  }

  bg.velocityY = bg.velocityY + 0.2;
  
  if(bg.y>750){
    bg.y=-10;
  }

  ironMan.velocityY = ironMan.velocityY + 0.5;


  drawSprites(); 
}

