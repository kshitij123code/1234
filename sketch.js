
function preload() {
  backgroundImg = loadImage("images/garden.png");
  //jerry1 = loadImage("images/jeeryOne.png");
  //jeery2 = loadImage("images\jeeryThree.png");
 // tom = loadImage("images\tomTwo.png");
  //tom2 = loadImage("images\tomFour.png");
}

function setup(){
  // createCanvas(1000,800);
    //create tom and jerry sprites here
   tom = createSprite(40,350,10,20); 
 //tom.addImage(tom);
  

   jeery = createSprite(360,350,10,20);
   // jeery(jeery1);
   //jeery.y = World.mouseY;
   //jeery.x = World.mouseX;

  // background = createSprite(0,0,1000,800);
  

   
}


function draw() {

   
    background(backgroundImg);
   
    //Write condition here to evalute if tom and jerry collide
     // if(keyDown(space)){
     // tom.shapeColour("green")
     // }

    drawSprites();

   // if(jeery.isTouching(tom)){
     //   tom.addImage(tom2); 
    //    jeery.addImage(jeery2);
      //  }




}
