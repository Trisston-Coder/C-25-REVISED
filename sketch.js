var ground;
var dustbinImg,dustbinSprite;
var paperImg,paperSprite;
var log1, log2, log3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	log1 = createSprite(600, 640, 150, 20);
	log1.shapeColor = color(22);
	
	log2 = createSprite(550, 580, 20, 150);
	log2.shapeColor = color(22);

	log3 = createSprite(650, 580, 20, 150);
    log3.shapeColor = color(22);

	Engine.run(engine);
  
	log1 = Bodies.rectangle(400, 650, 200, 20 , {density:90, isStatic:true});
	World.add(world, log1);

	log2 = Bodies.rectangle(300, 650, 20, 150 , {density:90, isStatic:true});
	World.add(world, log2);

	log3 = Bodies.rectangle(600, 650, 20, 150 , {density:90, isStatic:true});
	World.add(world, log3);

	dustbinSprite = createSprite(600, 550, 190, 200);
	dustbinSprite.addImage(dustbinImg)
	dustbinSprite.scale = 0.65

	ground = new Ground(400, 650, 800, 10);
	ground.shapeColor = color("brown")
	
	paperSprite = new Paper(100,200,70, {restitution:500, isStatic:false, density:90, friction: 0.5,});
}



function draw() {
  rectMode(CENTER);
  background(225);
  
  ground.display();
  paperSprite.display();
  dustbinSprite.display();
  
console.log(mouseX)
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperSprite.body,paperSprite.body.position, {x:269, y: -620});
	}
}