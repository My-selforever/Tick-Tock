var hr,min,sec;
var sc,mn,ho
function setup() {
  createCanvas(800,400);
  hr = hour();
  min = minute();
  sec = second();
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  sc = map(sec,0,60,0,360);
  mn = map(min,0,60,0,360)
  hr = map(ho,0,12,0,360)
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0)
  
}