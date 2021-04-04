
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree, stone;
var boy, boyI, sling;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload()
{
	boyI = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,700,800,100);
	tree = new Tree(600,380,600,600);
	stone = new Stone(50,200,100,100);
	mango1 = new Mango(600,200,50,50);
	mango2 = new Mango(700,130,50);
	mango3 = new Mango(800,250,50)
	mango4 = new Mango(450,280,70);
	mango5 = new Mango(500,300,40)
	mango6 = new Mango(880,200,50,50);
	mango7 = new Mango(520,130,50);
	mango8 = new Mango(730,250,50)
	mango9 = new Mango(590,370,62);
	mango10 = new Mango(590,300,40)
	boy = createSprite(150, 550);
	boy.addImage(boyI);
	boy.scale = 0.2;

	sling = new slingShot(stone.body,{x:235,y:420})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(135,206,235);

  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);



  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  sling.display();
  
  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	sling.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  launcherObject.attach(stone.body);
	}
  }



