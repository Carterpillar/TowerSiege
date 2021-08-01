const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var polygon

 
var B1
var B2
var B3
var B4
var B5
var B6
var B7
var B8
var B9
var B10
var B11
var B12
var B13
var B14
var B15
var B16
var B17
var B18



function preload(){
polygon=loadImage("polygon.png")

}
function setup(){
createCanvas(windowWidth,windowHeight)
engine=Engine.create()
world=engine.world
Engine.run(engine)
g=new Ground()
s1=new Stand(700,500,400,40)
s2=new Stand(1150,300,400,35)
 B1=new Block(640,375,60,60)
 B2=new Block(700,375,60,60)
 B3=new Block(580,375,60,60)
 B4=new Block(760,375,60,60)
 B5=new Block(820,375,60,60)
 B6=new Block(640,275,60,60)
 B7=new Block(700,275,60,60)
 B8=new Block(760,275,60,60)
 B9=new Block(700,175,60,60)
 B10=new Block(1030,150,60,60)
 B11=new Block(1090,150,60,60)
 B12=new Block(1150,150,60,60)
 B13=new Block(1210,150,60,60)
 B14=new Block(1270,150,60,60)
 B15=new Block(1150,90,60,60)
 B16=new Block(1090,90,60,60)
 B17=new Block(1210,90,60,60)
 B18=new Block(1150,30,60,60)
}
function draw(){
background("#39312F")
Engine.update(engine)

g.display();
s1.display();
s2.display();
fill("#301E1E")
stroke("#3B3737")
strokeWeight(7)
B1.display()
B2.display()
B3.display()
B4.display()
B5.display()
 B6.display()
 B7.display()
 B8.display()
 B9.display()
 B10.display()
 B11.display()
 B12.display()
 B13.display()
 B14.display()
 B15.display()
 B16.display()
 B17.display()
 B18.display()
 
}