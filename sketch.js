var bullet,speed,weight;

var wall,thickness;

function setup() {
  createCanvas(1600,400);
  
speed=random(55,90);
weight=random(400,1500);


  
  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX=speed;
  bullet.shapeColor = "white";
  
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(255);
}

function draw() {
  background(0,0,0);  
  if (wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
      bullet.velocityX=0;
      var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
  }
  
      if(damage>10)
      {
          wall.shapeColor="red";
      }
  
      if(damage <10)
      {
          wall.shapeColor="green";
      }
  
 
  drawSprites();

  
}




