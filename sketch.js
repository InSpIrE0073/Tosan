
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
   monkey = createSprite(150,290,20,20);
  monkey.addAnimation("monkey_running",monkey_running);
monkey.scale = 0.2;
 ground = createSprite(300,360,900,20);
  
  ground.velocityX= -3;
  obstacleGroup = new Group();
 foodGroup = new Group();
  
}

function draw() {
background("white");

  stroke("white");
  textSize(20);
  fill("white");
  text("score:" + score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime:" + survivalTime,100,50);
  
  console.log(ground.x);
  if (ground.x<200){
    ground.x=ground.width/2;
    
  }
Food();
Obstacle();
  monkey.collide(ground);

  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
  
  monkey.velocityY =monkey.velocityY +0.8;
  drawSprites(); 
}
function Food(){
  if (frameCount%80===0){
    food = createSprite(600,200,20,20);
    food.velocityX = -(6); 
    food.addImage(bananaImage);
    food.y = Math.round(random(120,200));
    food.scale = 0.1;
    food.lifetime = 300;
    
    
  }
  
  
}
function Obstacle() {
  if(frameCount % 80 === 0) {
    var obstacle = createSprite(600,315,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -(6);       
    obstacle.scale = 0.2
    obstacle.lifetime = 300;
    obstacle.addImage(obstaceImage);
}
  
}