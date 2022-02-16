var box;
var box2


function setup() {
  createCanvas(600,600);
  box = createSprite(200,200,30,30);
  box2= createSprite(300,300,10,10)

}

function draw() 
{
   background("pink");

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
  }

  drawSprites();
}




