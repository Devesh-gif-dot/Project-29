const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
var engine,world;
var ground,polygon,chain;
var box1,box2,box3,box4,box5,box6;


function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,550,800,10);
  polygon = new Polygon(200,100,50);

  chain = new Chain(polygon.body,{x:200, y:300});
  box1 = new Box(500,500);
  box2 = new Box(550,500);
  box3 = new Box(600,500);
  box4 = new Box(525,450);
  box5 = new Box(575,450);
  box6 = new Box(550,400);


  

  Engine.run(engine);
}

function draw() {
  background(255,255,255);  
  chain.display();

  ground.display();
  polygon.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  
}
function mouseDragged(){
  Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  chain.fly();
}
