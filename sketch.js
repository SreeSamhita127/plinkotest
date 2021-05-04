const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Event = Matter.Event;

var Particle = [];
var plinko = [];
var divisions= [];
var divisionHeight = 300;
var particle3;
var gameState = "play";
var count = 0;
var score = 0;

function setup() {
    createCanvas(800,800);

    engine = Engine.create();
	  world = engine.world;
    Engine.run(engine);
    base = new Base(width/2,height,width,20);


    for (var k = 0; k <=width; k = k + 80) {
        divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
    }
    for (var j = 40; j <= width; j = j + 50){
        plinko.push( new Plinko(j,50));
    }
    for(var j = 15; j <= width; j = j+ 50){
        plinko.push(new Plinko(j,150));        
    }
    for (var j = 40; j <= width; j = j + 50){
        plinko.push( new Plinko(j,250));
    }
    for(var j = 15; j <= width; j = j+ 50){
        plinko.push(new Plinko(j,350));        
    }     
  }
  
  function draw() {
    background(225);  
    Engine.update(engine);
      
    textSize(20);
    text("Score :" +score,20,20)

    textSize(30)
    text("500",15, 550);
    text("500", 95, 550);
    text("500", 175, 550);
    text("500", 255, 550);
    text("100", 335, 550);
    text("100", 415, 550);
    text("100", 495, 550);
    text("200", 575, 550);
    text("200", 655, 550);
    text("200", 735, 550);
    
  base.display();
  if(gameState == "end"){
    textSize(50);
    text("gameover",400,400); 
  }
     
if(gameState != "end"){
  
        if(particle3.body.position.x < 300 && particle3.body.position.y > 760){
      score=score+500
      particle3.display();

      //particle3=null;
      if(count>=5){
      gameState="end";
    }}
    else if (particle3.body.position.x > 301 && particle3.body.position.x < 600 && particle3.body.position.y > 760){
      score = score + 100;
      particle3.display();
      //particle3 = null;
      if(count >=5){
        gameState = "end";
    }}
    else if(particle3.body.position.x < 800 && particle3.body.position.x > 601 && particle3.body.position.y > 760){
      score = score + 200;
      particle3.display();
      //particle3 = null;
      if(count >= 5){
        gameState = "end"; 
    }}
    
}
  for(var s = 0; s<Particle.length;s++){
    Particle[s].display();
  }
  for (var i = 0; i < plinko.length; i++) {
    plinko[i].display();
  }
   for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
    drawSprites();
  }

  function mousePressed(){
    if(gameState !== "end"){
      count++;
      particle3 = new Particle1(mouseX,50,10,10);
      Particle.push(particle3);
    }
  }