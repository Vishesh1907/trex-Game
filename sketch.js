var trex,trex_running,trex_collided;
var ground,groundImage;
var invisibleGround;
var cloud,cloudImage,cloudGroup;
var obstacles1,obstacles2,obstacles3,obstacles4,obstacles5,obstacles6,obstaclesGroup;
var score = 0;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
trex_collided = loadImage("trex_collided.png");
  cloudImage = loadImage("cloud.png");
  groundImage = loadImage("ground2.png");
  obstacles1 = loadImage("obstacle1.png");
  obstacles2 = loadImage("obstacle2.png");
  obstacles3 = loadImage("obstacle3.png");
  obstacles4 = loadImage("obstacle4.png");
  obstacles5 = loadImage("obstacle5.png");
  obstacles6 = loadImage("obstacle6.png");
  
}
function setup() {
  createCanvas(600,200);
  trex = createSprite (50,180,20,60);
  trex.addAnimation ("running",trex_running)
  trex.scale = 0.5;
  ground = createSprite(200,180,400,20);
  ground.velocityX = -6
  ground.addImage("ground",groundImage);
  ground.x = ground.width/2;
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
cloudGroup = new Group();
  obstacleGroup = new Group();
  score = 0;
  
  
}

function draw() {
  background("white");
  score = score+Math.round(getFrameRate()/60)
  text("score:"+score,500,50)
  if(keyDown("space")){
  trex.velocityY = -12
  }
  trex.velocityY = trex.velocityY+0.5
  if(ground.x <0){
    ground.x = ground.width/2
  }
  
  trex.collide(invisibleGround);
  
  spawnCloud();
  spawnObstacles();
  
  drawSprites();
}
function spawnCloud(){
if(frameCount%60 === 0){


var cloud = createSprite(600,120,40,10);
cloud.addImage(cloudImage)
  cloud.velocityX = -5;
  cloud.y = Math.round(random(80,120));
  cloud.scale = 0.5;
  cloud.lifeTime = 200;
  cloud.depth = trex.depth;
  trex.depth = trex.depth+1;
  cloudGroup.add(cloud);
  
}
}  

function spawnObstacles(){
  if(frameCount%60 === 0){
  var obstacles = createSprite(600,165,10,40) ;
    obstacles.velocityX = -5;
    var r = Math.round(random(1,6));
    switch(r){
      case 1:obstacles.addImage(obstacles1);
        break;
        case 2:obstacles.addImage(obstacles2);
        break;
        case 3:obstacles.addImage(obstacles3);
        break;
        case 4:obstacles.addImage(obstacles4);
        break;
        case 5:obstacles.addImage(obstacles5);
        break;
        case 6:obstacles.addImage(obstacles6);
        break;
        
        default:break;
        
        
        
        
        
    }  
    obstacles.scale = 0.5
    obstacles.lifeTime = 364;
    obstacleGroup.add(obstacles);
    
  
}
}