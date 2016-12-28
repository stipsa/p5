var krugovi = [];
var i = 0;
var j = 0;
var m = 0;
var par = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  fill(255, 50);
  for (i = 0; i < 3000; i++) {

    krugovi.push(new Krug(random(width), random(height)));

  }
  print(krugovi.length);
  rectMode(CENTER);
}

function draw() {
  background(0);
  for (i = 0; i < krugovi.length; i++) {
    krugovi[i].show();
  }
}

function Krug(x, y) {
  this.x = x;
  this.y = y;

  this.show = function() {
    this.x = this.x + random(0, 2);
    this.y = this.y + random(0, 2);
    if (this.x > width || this.y > height) {
      if (par > 0) {
        this.x = random(-50, width - 50);
        this.y = random(-50, 0);
        par *= -1;
      } else {
        this.x = random(-50, 0);
        this.y = random(-50, height - 50);
        par *= -1;
      }
    }
    if (dist(this.x, this.y, mouseX, mouseY) < 300) {
      this.n = map(dist(this.x, this.y, mouseX, mouseY), 0, 300, 40, 2);
      this.color = map(dist(this.x, this.y, mouseX, mouseY), 0, 300, 255, 0);
      fill(this.color, 0, 255, 20);
      ellipse(this.x, this.y, this.n, this.n);
      if (dist(this.x, this.y, mouseX, mouseY) < 50) {
        fill(random(150,255),random(150,255),0,180);
        ellipse(this.x, this.y, 3, 3);
      }
    } else {
      //fill(255,50);
      //ellipse(this.x, this.y, 2, 2);
    }
  }
}