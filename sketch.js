const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder, ball, ground;

var stand1, stand2;
var ball;
var slingShot;
var polygon, polygon_img;

function preload() {
  polygon_img = loadImage("polygon.png");
}
function setup() {
  createCanvas(900, 400);

  // implying physics engine
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  //creating static grounds and stands
  ground = new Ground();
  stand1 = new Stand(390, 300, 250, 10);
  stand2 = new Stand(700, 200, 200, 10);

  //level one
  block1 = new Block(300, 275, 30, 40);
  console.log(block1);
  block2 = new Block(330, 275, 30, 40);
  block3 = new Block(360, 275, 30, 40);
  block4 = new Block(390, 275, 30, 40);
  block5 = new Block(420, 275, 30, 40);
  block6 = new Block(450, 275, 30, 40);
  block7 = new Block(480, 275, 30, 40);

  //level two
  block8 = new Block(330, 235, 30, 40);
  block9 = new Block(360, 235, 30, 40);
  block10 = new Block(390, 235, 30, 40);
  block11 = new Block(420, 235, 30, 40);
  block12 = new Block(450, 235, 30, 40);

  //level three
  block13 = new Block(360, 195, 30, 40);
  block14 = new Block(390, 195, 30, 40);
  block15 = new Block(420, 195, 30, 40);

  //top
  block16 = new Block(390, 155, 30, 40);

  //creating block level 1 for second stand
  block17 = new Block(625, 180, 30, 40);
  block18 = new Block(655, 180, 30, 40);
  block19 = new Block(685, 180, 30, 40);
  block20 = new Block(715, 180, 30, 40);
  block21 = new Block(745, 180, 30, 40);
  block22 = new Block(775, 180, 30, 40);

  //creating block level 2 for second stand
  block23 = new Block(655, 140, 30, 40);
  block24 = new Block(685, 140, 30, 40);
  block25 = new Block(715, 140, 30, 40);
  block26 = new Block(745, 140, 30, 40);
  // block27 = new Block(760, 140, 30, 40);

  //creating block level 3 for second stand
  block28 = new Block(685, 100, 30, 40);
  block29 = new Block(715, 100, 30, 40);

  //creating block level 4 for stand 2 
  block30 = new Block(700, 50, 30, 40);

  //creating the polygon 

  polygon = new Polygon(50, 200);

  //adding polygon to the world
  World.add(world, polygon);

  //creating the slingshot using the slingshot class
  slingshot = new SlingShot(polygon.body, { x: 150, y: 150 });


}
function keyPressed() {

  if (keyCode === 32) {

    Matter.Body.setPosition(polygon.body, { x: 150, y: 150 });
    slingshot.attach(polygon.body);
    // slingshot.display();

  }

}

function draw() {
  background(56, 44, 44);

  textSize(20);
  fill("lightyellow");

  // displaying the static grounds and stands
  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);

  stroke(15);

  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();

  fill("grey");
  block16.display();

  //starting to display level 1 of stand 2 
  fill("teal");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();

  //starting to display level 2 of stand 2
  fill("white");
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  // block27.display();

  //starting to display level 3 of stand 2

  fill("teal");
  block28.display();
  block29.display();

  fill("white");
  block30.display();

  polygon.display();
  slingshot.display();

  textSize(15);
  text("Press space to get another chance", 650, 300);

}

function mouseDragged() {

  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });

}

function mouseReleased() {

  slingshot.fly();

}

