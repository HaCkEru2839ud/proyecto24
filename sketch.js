const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rockita;
var hierro1;
var hule1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rockita = new piedra(700,320,100,100);
    hierro1 = new hierro(500,200,600,100);
    hule1 = new hule(900, 470, 70);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rockita.display();
    hierro1.display();
    hule1.display();

    
 
}