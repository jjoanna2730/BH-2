
var player;
var ground;
var backgroundTop, backgroundBottom, backgroundLeft, backgroundRight, backgroundCenter;
var pm, pb, pl, pr, pt;
var playerImg;

function preload(){
  //player_running = loadAnimation("player1.png","player3.png","player4.png");
  //player_collided = loadImage("player_collided.png");
  backgroundBottom = loadImage("background_bottom.png");
backgroundTop = loadImage("background_top.png");
backgroundLeft = loadImage("background_left.png");
backgroundRight = loadImage("background_right.png");
backgroundCenter = loadImage("background_central.png");
  playerImg=loadImage("player.png")
}

function setup() {
  createCanvas(400, 400);
  
  //create a player sprite
  player = createSprite(50,180,20,50);
  player.addImage(playerImg);
  
  //adding scale and position to player
  player.scale = 0.03;
  player.x = 200
  
  //Adding room1
  pm = createSprite(100, 50, 300, 300);
  pm.addImage("bc",backgroundCenter);
  pm.scale = 0.5;
  //create ground sprite
  ground = createSprite(200,180,400,20);
  
}

function draw() {
  background(220);
  


  
  //jumping the player on space key press
  if(keyDown("UP_ARROW")) {
    player.y += -10;
  }
  if(keyDown("RIGHT_ARROW")) {
    player.x += +10;
  }
  if(keyDown("LEFT_ARROW")) {
    player.x += -10;
  }
  if(keyDown("DOWN_ARROW")) {
    player.y += 10;
  }
  
  
 
 //stop player from falling down 
  player.collide(ground);
  drawSprites();
}