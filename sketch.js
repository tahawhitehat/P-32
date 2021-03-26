var human,humanImage
var fireballGroup,healthGroup
var fireball,FBI
var health,HI
var score = 0
function preload(){
  humanImage = loadImage("runningHuman.png")
  FBI = loadImage("fireballImage.jpg")
  HI = loadImage("health.png")
}
function setup() {
  createCanvas(650,650);
  human = createSprite(100, 596, 50, 50);
  human.addAnimation("humanRunning",humanImage)
  human.scale = 0.15
  //score = 0
  
  fireballGroup = createGroup();
  healthGroup = createGroup();
}

function draw() {
  background("black");
  if (human.isTouching(healthGroup)){
    score = score + 5
    healthGroup.destroyEach();
  }
  if (human.isTouching(fireballGroup)){
    score = score - 3
    fireballGroup.destroyEach();
  }
  if (keyIsDown(LEFT_ARROW)){
    human.x = human.x - 3
  }
  if (keyIsDown(RIGHT_ARROW)){
    human.x = human.x + 3
  }
  if (score < 0){
    fireball.velocityY = 0
    health.velocityY = 0
    fireball.lifetime = 0
    health.lifetime = 0
    textSize(45)
    text("YOU LOSE", 175,375)
  }
  score.depth = fireballGroup.depth + 3

  spawnFireball();
  spawnHealth();
  drawSprites();
  stroke("white")
  textSize(20)
  fill("white")
  text("Score:"+score,200,50)
}
function spawnFireball(){
  if (frameCount % 30 === 0){
    fireball = createSprite(random(20,600),0,40);
    fireball.velocityY = 6
    fireball.addImage("fireballImage",FBI)
    fireball.scale = .2
    fireball.lifetime = 95;
    fireballGroup.add(fireball);
  }
  
 
 }
 function spawnHealth(){
  if (frameCount % 100 === 0){
    health = createSprite(random(20,600),0,40);
    health.velocityY = 6
    health.addImage("healthImage",HI)
    health.scale = .05
    health.lifetime = 95;
    healthGroup.add(health);
  }
  
 
 }