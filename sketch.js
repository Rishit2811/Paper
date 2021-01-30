
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper= new Paper(200,450,70)
  ground= new Ground(width/2,620,width,20)
  d1 = new Ground(1200,510,20,200)
  d2 = new Ground(1000,510,20,200)
  d3 = new Ground(1100,600,200,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display()
  ground.display()
  d1.display();
  d2.display()
  d3.display()
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60})
	}
}
