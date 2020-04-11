const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var options ={
        restitution:1,
        density :1
    }

    box = Bodies.rectangle(200,200,50,50,options);
    World.add(world,box);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    var pos = this.body.position;
    rectMode(CENTER);
    rect(pos.x,pos.y,50,50);
    
}