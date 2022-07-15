const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


let engine;
let world;

var ground;
var enemy;


function preload()
{

}

function setup() {
  createCanvas(500,800);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;


  
  ground = new Ground(250,795,2000,5);

  enemy = createSprite(200,200,200,200);
  enemy.shapeColor = "red";
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);

  Engine.update(engine);
  


  ground.show();




  drawSprites();

}



