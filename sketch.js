function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}
var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=300
function draw() {
  background("black");  
  drawSprites();
  ground=new Ground(240,780,480,20)
}
for(var k=0;k<=innerWidth;k=k+80){
  divisions.push (new Division(k,height-divisionHeight/2,10,divisionHeight))
}
for(var j=40;j<=width;j=j+50)
{
  plinkos.push(new Plinko(j,75))
}
for(var j=15;j<=width-10;j=j+50)
{
  plinkos.push(new Plinko(j,175))
}
for(var j=-10;j<=width-20;j=j+50)
{
  plinkos.push(new Plinko(j,275))
}
for(var j=-35;j<=width-30;j=j+50)
{
  plinkos.push(new Plinko(j,375))
}