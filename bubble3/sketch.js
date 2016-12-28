/* 
6.4 p5.js The Constructor Function 
Code for https://vimeo.com/channels/learningp5js/141211393
*/

var bubbles = [];

function setup() {

  createCanvas(windowWidth,windowHeight);
  for (var i = 0; i < 100; i++) {
    bubbles[i] = new Bubble();
  }

}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].display(i,3);

  }

}

function Bubble() {
  this.x = random(-50, width);
  this.y = random(-50, height);
  this.ddx = [];
  this.ddy = [];

  this.checkdst = function() {


  }
  
  this.display = function(k,krakovi) {
    for (i=0; i<krakovi; i++) {
      this.ddx[i]=width*3;
      this.ddy[i]=height*3;
    }
    this.x = this.x + random(0, 1);
    this.y = this.y + random(0, 1);
    if (this.x>(width+10) || this.y>(height+10)){
      if(k%2 == 0) {
        this.x=random(-50,width-50);
        this.y=random(-100,-50);
      } else {
        this.y=random(-50,height-50);
        this.x=random(-100,-50);
      }
    }

    stroke(255,255,255,50);

    fill(0,0,0,100);
    ellipse(this.x, this.y, 10, 10);
    
    
    for (i = 0; i < bubbles.length; i++) {
        if ((dist(bubbles[i].x,bubbles[i].y,this.x,this.y) > 0) && (dist(bubbles[i].x,bubbles[i].y,this.x,this.y) < dist(this.x,this.y,this.ddx[i%krakovi],this.ddy[i%krakovi]))) {
          this.ddx[i%krakovi]=bubbles[i].x;
          this.ddy[i%krakovi]=bubbles[i].y;
      }

    }
    for (i=0; i < this.ddx.length; i++) {
      line(this.x, this.y, this.ddx[i], this.ddy[i]);
    }
    
  }

}