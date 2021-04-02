var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	

	var packBP_op={
		isStatic:true
	}
	packageBody = Bodies.circle(packageSprite.x ,packageSprite.y , 5 ,packBP_op);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  //packageSprite.x=helicopterSprite.x
  //packageSprite.y=helicopterSprite.y
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 //packageBody.position.x=helicopterSprite.x
 // packageBody.position.y=helicopterSprite.y
//console.log(packageBody.position.y);
  
  
  drawSprites();
  
  
 
}
function keyPressed(){
	if(keyCode === LEFT_ARROW){
		helicopterSprite.x = helicopterSprite.x -20;
		translation={x:-20,y:0}
	   Matter.Body.translate(packageBody, translation);
	}
  else if(keyCode === RIGHT_ARROW){
	  helicopterSprite.x = helicopterSprite.x +20;
	  translation={x:20,y:0} 
	  Matter.Body.translate(packageBody, translation)
	}
	else if(keyCode === DOWN_ARROW){
	  /*var pack_oP={
		  restitution:0
	  }
	  Engine.update(engine);
	  /*packageSprite.velocityY=2;
	  packageBody.velocityY=2;
	  packageBody = Bodies.circle(packageSprite.x , packageSprite.y , 5 ,pack_oP);
	  World.add(world, packageBody);*/
	  Matter.Body.setStatic(packageBody,false);
  }
}