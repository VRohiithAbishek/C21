var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  fixedRect2 = createSprite(700, 100, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;

  fixedRect3 = createSprite(900, 100, 50, 80);
  fixedRect3.shapeColor = "green";
  fixedRect3.debug = true;

  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  fixedRect3.x= World.mouseX
  fixedRect3.y= World.mouseY
  bounceOff(movingRect,fixedRect)
if(isTouching(fixedRect2, fixedRect3)){
  fixedRect2.shapeColor= "red"
  fixedRect3.shapeColor= "blue"
} else {
  fixedRect2.shapeColor= "green"
fixedRect3.shapeColor= "green"}
  
  drawSprites();
}
