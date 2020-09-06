
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof,pendulum1,pendulum2,penduum3,pendulum4,pendulum5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	roof=new Roof(400,350,200,20)
	pendulum1=new Pendulum(250,300,20,20)
	
	rope=new rope(pendulum1.body,roof.body,2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
pendulum1.display()
rectMode(CENTER)
rect(400,350,200,20)

  drawSprites();
 
}



