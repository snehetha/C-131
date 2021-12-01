function preload(){
 picture=loadImage("Lisa_9.jpg");
}
function setup(){
canvas=createCanvas(640,420);
canvas.center();
}
function draw(){
image(picture,0,0,640,420);
}