
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var back,Back;
var hero,Hero;
var villian,Villian;
var score;
var bullet,Bullet;

function preload(){
    back = loadImage("images.png");
    hero = loadImage("superhero.png");
    villian = loadImage("villian.png");
    bullet = loadImage("bullet.png");

}


function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  Back = createSprite(500,250);
  Back.addImage(back);
  Back.scale = 5;

  Hero = createSprite(250,250,40,40);
  Hero.addImage(hero);
  Hero.scale= 0.1;

  Villian= createSprite(750,250,40,40);
  Villian.addImage(villian);
  Villian.scale= 0.1;

  Bullet= createSprite(1400,100,40,40);
  Bullet.addImage(bullet);
 
  Back.x=Back.width/2;

  score=0;
}


function draw() 
{
  background("white");
  Engine.update(engine);
  Back.velocityX= -4;
  
  if (Back.x <= 0){
    Back.x= Back.width/2;
    
  }

  if(score%100 ===0)
  {
    Bullet.y=Math.round(random(10,700))
    Bullet.scale= 0.09;
  }

  drawSprites();
  
  mousePressed();

  textSize(40);
  text("score: "+ score,1300,50);
  score = score + Math.round(getFrameRate()/60);
  console.log(score);

  
}


function mousePressed()
{
  if (keyCode === 38){
    Hero.y = Hero.y-5;
  }

  if (keyCode === 40){
    Hero.y = Hero.y +5;
  }
}
