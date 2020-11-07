const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var lstone,lmango;
var Boy,tree1,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var backgroundImg,platform;
var Stone, slingShot;



function setup(){
    createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,80);
    
    Boy = new boy(150,410,180,225);

    Stone = new stone(100,100);

    tree1 = new tree(700,255,450,500);

    mango1 = new mango(550,250);

    mango2 = new mango(600,200);

    mango3 = new mango(610,150);

    mango4 = new mango(650,200);

    mango5 = new mango(750,220);

    mango6 = new mango(800,200);

    mango7 = new mango(650,100);

    mango8 = new mango(700,200);

    mango9 = new mango(850,230);

    mango10 = new mango(780,150);

    mango11 = new mango(780,85);

    mango12 = new mango(700,150)

    slingshot = new SlingShot(Stone.body,{x:95, y:360});

}

function draw(){
    background("lightblue");
    Engine.update(engine);
    strokeWeight(4);

    
   
    ground.display();
    
    Boy.display();

    tree1.display();

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

    mango11.display();

    mango12.display();

    Stone.display();
       
  
    
}
    

    
function mouseDragged(){
    Matter.Body.setPosition(Stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(Stone.body);
    }
}