const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,d2,d3,Paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
Paper=new paper(200,500,50);
	

	//Create the Bodies Here.
	dustbin1=new dustbin(400,670,800,20)


	Engine.run(engine);
  
}


function draw() {

  
  background(0);
  Paper.display();
  dustbin1.display();
  
 
}



