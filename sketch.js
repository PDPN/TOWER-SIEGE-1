var polygonImg;
var box1, box2, box3, box4, box5, box6, box7, box8;
var box9, box10, box11, box12, box13, box14, box15, box16; 


var rec1, rec2; 

function preload ()
{
  polygonImg = loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);
  
  // first colom
  
  box1 = createSprite(312,180,20,30);
  box2 = createSprite(325,215,20,30);
  box3 = createSprite(300,215,20,30);
  box4 = createSprite(290,250,20,30);
  box5 = createSprite(315,250,20,30);
  box6 = createSprite(340,250,20,30);
  box7 = createSprite(280,285,20,30);
  box8 = createSprite(305,285,20,30);
  box9 = createSprite(330,285,20,30);
  box10 = createSprite(355,285,20,30);
  box11 = createSprite(364,319,20,30);
  box12 = createSprite(340,319,20,30);
  box13 = createSprite(315,319,20,30);
  box14 = createSprite(290,319,20,30);
  box15 = createSprite(265,319,20,30);
  rect1 = createSprite(315,345,130,10);


  box16 = createSprite(625,100,20,30);
  box17 = createSprite(610,135,20,30);  
  box18 = createSprite(635,135,20,30);
  box19 = createSprite(645,170,20,30);
  box20 = createSprite(620,170,20,30);
  box21 = createSprite(595,170,20,30);
  box22 = createSprite(632,205,20,30);
  box23 = createSprite(655,205,20,30);
  box24 = createSprite(608,205,20,30);
  box25 = createSprite(583,205,20,30);
  rect2 = createSprite(620,230,100,10);
}

function draw() {
  background(0); 
  
  imageMode(CENTER);
  image(polygonImg, 100, 200, 30, 30);
 
  drawSprites();
}