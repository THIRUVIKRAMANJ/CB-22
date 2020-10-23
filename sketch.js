
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,groundBody
var paper,paperBody
var dustbin,dustbinBody
var paperImage,dustbinImage

function preload(){
 paperImage=loadImage("paper.png")
 dustbinImage=loadImage("dustbingreen.png")	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	groundBody=Bodies.rectangle(400,690,800,20,{isStatic:true,friction:3,density:3})
    World.add(world,groundBody)
    ground=createSprite(groundBody.position.x,groundBody.position.y,800,20)
	ground.shapeColor="green"
	
	wall1=createSprite(650,670,100,20)
    wall1.shapeColor="white"
    wall1Body=Bodies.rectangle(wall1.x,wall1.y,100,20,{isStatic:true})
    World.add(world,wall1Body)

    wall2=createSprite(600,630,20,100)
	wall2.shapeColor="white"
	wall2Body=Bodies.rectangle(wall2.x,wall2.y,20,100,{isStatic:true})
	World.add(world,wall2Body)
	
	wall3=createSprite(700,630,20,100)
    wall3.shapeColor="white"   
	wall3Body=Bodies.rectangle(wall3.x,wall3.y,20,100,{isStatic:true})
	World.add(world,wall3Body)
	
	var options={
	 isStatic:false,
	 restitution:0,
	 friction:3,
	 density:3
	}
	paperBody=Bodies.rectangle(100,550,20,20,options)
    World.add(world,paperBody)
    
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  //push()
  //fill("pink")
  drawSprites();
image(paperImage,paperBody.position.x,paperBody.position.y,70,70)
image(dustbinImage,580,580,140,120)
  //pop()
  if(keyDown("up")){
	  Matter.Body.applyForce(paperBody,paperBody.position,{x:10,y:-10});
  }
}



