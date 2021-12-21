var bg;
var iss;
var spacecraft1, spacecraft2, spacecraft3, spacecraft4;
var spacecraft;

var hasDocked = false;

function preload(){

bg = loadImage("Docking-undocking/spacebg.jpg");
iss = loadImage("Docking-undocking/iss.png")

spacecraft1 = loadImage("Docking-undocking/spacecraft1.png");
spacecraft2 = loadImage("Docking-undocking/spacecraft2.png");
spacecraft3 = loadImage("Docking-undocking/spacecraft3.png");
spacecraft4 = loadImage("Docking-undocking/spacecraft4.png");

}
function setup() {
  createCanvas(1200,600);
  spacecraft = createSprite(200, 500, 50, 50);

  spacecraft.addImage(spacecraft1)
  spacecraft.scale = 0.3


}

function draw() {
  background(bg);
  
  image(iss , 300,20,800, 500)
  


if(!hasDocked){

  if(spacecraft.x > 620 && spacecraft.x < 640 && spacecraft.y > 350 && spacecraft.y < 370){

  hasDocked =  true;

  spacecraft.addImage(spacecraft1)

  }

  if(keyDown(RIGHT_ARROW)){

  spacecraft.velocityX = 5;
  spacecraft.velocityY = 0;

  spacecraft.addImage(spacecraft4)

  }

  if(keyDown(LEFT_ARROW)){

    spacecraft.velocityX = -5;
    spacecraft.velocityY = 0;

    spacecraft.addImage(spacecraft3)
  
    }

    if(keyDown(UP_ARROW)){

      spacecraft.velocityY = -5;
      spacecraft.velocityX = 0;

      spacecraft.addImage(spacecraft2)
    
      }


      if(keyDown(DOWN_ARROW)){

        spacecraft.velocityY = 5;
        spacecraft.velocityX = 0;

        spacecraft.addImage(spacecraft2)

        }

      }
      else{

      spacecraft.velocityX = 0; 
      spacecraft.velocityY = 0; 

      text("YOU HAVE SUCESSFULLY DOCKED OH NO IT IS GOING TO EXPLODE", 120, 120)

      }

  drawSprites();



}