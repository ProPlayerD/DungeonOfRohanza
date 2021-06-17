var pathImg, knightImg

function preload(){
 pathImg = loadImage("Images/path.jpg");
 knightImg = loadAnimation("Images/tile012.png","Images/tile013.png","Images/tile014.png");
 knightImg2 = loadAnimation("Images/tile013.png");
 knightImg3 = loadAnimation("Images/tile014.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight-200);
  path = createSprite(width/2,height/2);
  path.addImage(pathImg);
  path.scale = 2.5;

  knight = createSprite(width-100,height-100);
  knight.addAnimation("standing",knightImg2);
  knight.addAnimation("walking",knightImg);
  knight.addAnimation("jumping",knightImg3);
}

function draw() {
  background(255,255,255);  

  knight.velocityX = 0
  knight.changeAnimation("standing",knightImg2);

  if(keyDown("a")){
    knight.velocityX = -3;
    knight.changeAnimation("walking",knightImg);
  }

  if(keyDown("d")){
    knight.velocityX = 3;
    knight.changeAnimation("walking",knightImg);
  }

  if(keyDown("w")){
    knight.velocityY = -2;
    knight.changeAnimation("jumping",knightImg3);
  }

  knight.velocityY+=0.2;
  drawSprites();
}