var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box1Sprite,box2,box2Body,box3,box3Body;
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
	createCanvas(800, 600);
	rectMode(CENTER);
	

	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	boxSprite=createSprite(390, height-45, 200,15);
	boxSprite.shapeColor= "red"

	box2 = createSprite(290,height-82,15,90);
	box2.shapeColor = "red";


	box3 = createSprite(490,height-82,15,90);
	box3.shapeColor = "red";



	engine = Engine.create();
	world = engine.world;
	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.87, isStatic:true});
	World.add(world, packageBody);
	
	//box1 = createSprite(300,680,200,20,{isStatic:true});
	//box1.shapeColor = "red"
	//box1Body = Bodies.rectangle(400,680,200,20);

	//World.add(world,box1);

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 box1 = Bodies.rectangle(390,height-45, 200, 15 , {isStatic:true} );
	 World.add(world, box1);

	 box2Body = Bodies.rectangle(290,height-82,15,90,{isStatic:true})
	 World.add(world,box2Body)

	 box3Body = Bodies.rectangle(490,height-82,15,90,{isStatic:true})
	 World.add(world,box3Body)
	 
	Engine.run(engine);
  
}


function draw() 
{
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed()
 {
 if (keyCode === DOWN_ARROW)
  {
	Matter.Body.setStatic(packageBody,false);
  }
}



