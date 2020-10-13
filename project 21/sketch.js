var wall, thickness
var bullet, speed,weight
var def = 0
var damage = 0
function setup() {
  createCanvas(1600,400);
  bullet =createSprite(50, 200, 50, 10);
  wall=createSprite(1500,200,thickness,height/2)
  speed=random(55,90)
  weight=random(400,1500)
  thickness=random(22,83);
}

function draw() {
  background("black")
  bullet.velocityX=speed
  if (bullet.isTouching(wall))
  {
 def = 0.5 * weight * speed * speed/22500
 damage = 0.5 * weight * speed * speed/thickness*thickness*thickness
 bullet.velocityX=0;
  }
  if (damage<10)
  {
    wall.shapeColor=("green")
}
if (damage>10)
{
  wall.shapeColor=("red")
}
  background(255,255,255);  
  drawSprites();
}