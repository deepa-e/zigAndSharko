var zig;
var sharko;
var ground, groundImage;
var obstacles, obstaclesImg;


function preload(){
  groundImage = loadImage("assets/ground.jpg");
}

function setup(){
  createCanvas(600,200);

  // creating ground
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = width/2;
  ground.velocityX=-2;

  zig=createSprite(100,150,70,70);
  sharko=createSprite(70,70,50,50);
  
  obstacles=createSprite(500,500,50,50)

}

function draw(){

  background("pink");
  ground.velocityX=-2;
  if (ground.x < 0){
    ground.x = ground.width/2;
  }

  // if(obstacles.isTouching(zig)){
  //   zig.velocityX=-5
  // }

  // if(obstacles.isTouching(sharko)){
  //   sharko.velocityX=-5
  // }

  if(keyIsDown(UP_ARROW)){
    zig.velocityY = -5
  }

  if(keyDown("w")){
    sharko.velocityY = -5
  }

  spawnObstacles();
  



  drawSprites();
}

function spawnObstacles(){
  if(frameCount %60 == 0){
    var obstacle=createSprite(600,20,20,20)
  }

}

