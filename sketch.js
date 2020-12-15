var speed, weight;
var bullet , wall, thickness;

function setup() {
  
 createCanvas(800,400);
 
  speed = random(223, 321);
  weight = random(30, 52)

  thickness = random(22,83);
  
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = "white";

  wall = createSprite(750, 200, thickness, width/2);
  wall.shapeColor = "grey";
}

function draw() {
  background("black");  

  if(hasCollided(bullet, wall)){

  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);

  if(damage> 10){
    car.shapeColor = "red";
  }

  if(damage < 10){
    car.shapeColor = "green";
  }
}

  drawSprites();
}


function hasCollided(lbullet, lwall){

  bulletRightEdge = lbullet.x + lbullet.width:
  wallLeftEdge = lwall.x;

  if(bulletRightEdge >= wallLeftEdge){

  return true;  
 }

  return false;

}