
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, tree, stone;
var boy, boyI, mongo1;

function preload()
{
	boyI = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,700,800,100);
	tree = new Tree(600,550,20,20);
	stone = new Stone(50,200,100,100);
	mango1 = new Mango(600,200,50,50);
	boy = createSprite(150, 550);
	boy.addImage(boyI);
	boy.scale = 0.2;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(135,206,235);

  stone.x= boy.position.x
  stone.y= boy.position.y

  if (stone.y < 500){
	  stone.setStatic=true 

  }

  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  
  drawSprites();
 
}



