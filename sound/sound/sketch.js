var canvas;
var mic;

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  mic = new p5.AudioIn();
  mic.start
}

function draw() {
  background(175)
  var vol = mic.getLevel();
  ellipse(width/2, height/2, 10, vol*100)
  print (vol);
}