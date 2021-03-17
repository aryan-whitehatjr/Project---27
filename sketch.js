
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var engine,world
var B1, B2,B3,B4,B5,roofObject ;
var R1,R2,R3,R4,R5  ;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
dia = 40;
Bobx = width/2;
Boby = height/4 + 500;
	//Create the Bodies Here.
roofObject = new roof(width/2,height/4, width/7,20);
B1 = new BobObject(Bobx - dia*2, Boby,dia);
B2 = new BobObject(Bobx-dia, Boby,dia);
B3 = new BobObject(Bobx, Boby, dia);
B4 = new BobObject(Bobx+dia, Boby,dia);
B5 = new BobObject(Bobx + dia*2, Boby,dia);

R1 = new rope(B1.body,roofObject.body,-dia*2,0);
R2 = new rope(B2.body,roofObject.body,-dia*1,0);
R3 = new rope(B3.body,roofObject.body,0,0);
R4 = new rope(B4.body,roofObject.body,dia*1,0);
R5 = new rope(B5.body,roofObject.body,dia*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,211,0);

  roofObject.display();
  R1.display();
  R2.display();
  R3.display();
  R4.display();
  R5.display();

  B1.display();
  B2.display();
  B3.display();
  B4.display();
  B5.display();

  drawSprites();
 
}
function keyPressed()
{
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(B1.body, B1.body.position,{x:-50, y:-45})
	}
}


