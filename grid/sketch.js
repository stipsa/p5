var cellsize = 50;
var padding = cellsize / 2 - cellsize / 10;
var grid = [];
var i;
var j;
var k;
var numcols;
var numrows;

function setup() {
  createCanvas(windowWidth, windowHeight);

  numcols = floor(width / cellsize);
  numrows = floor(height / cellsize);

  for (i = 0; i < numcols; i++) {

    grid[i] = [];
    for (j = 0; j < numrows; j++) {
      grid[i][j] = new Block(i * cellsize + random(0, cellsize), j * cellsize + random(0, cellsize));
    }
  }
}

function draw() {
  background(0);
  stroke (255,60);

  for (i = 0; i < numcols; i++) {

    for (j = 0; j < numrows; j++) {
      grid[i][j].connect(i, j);

    }
  }
}

function Block(x, y) {
  this.x = x;
  this.y = y;

  this.show = function() {
    ellipse(this.x, this.y, 3, 3);
  }

  this.connect = function(i, j) {
    this.i = i;
    this.j = j;


    if (dist(this.x, this.y, mouseX, mouseY) < 300) {
      this.n = map(dist(this.x, this.y, mouseX, mouseY), 0, 300, 110, 2);
      this.color = map(dist(this.x, this.y, mouseX, mouseY), 0, 300, 255, 0);
      this.titraj = map(dist(this.x, this.y, mouseX, mouseY), 0, 300, 0, 5);
      fill(this.color, 0, 255, 180);
      ellipse(this.x, this.y, this.n, this.n);
      this.x += random(this.titraj*-1, this.titraj);
      this.y += random(this.titraj*-1, this.titraj);

    } else {
      this.x += random(-10, 10);
      this.y += random(-10, 10);
    }

    if (this.x > this.i * cellsize + cellsize - padding) {
      this.x = this.i * cellsize + cellsize - padding;
    } else if (this.x < this.i * cellsize + padding) {
      this.x = this.i * cellsize + padding;
    } else if (this.y > this.j * cellsize + cellsize - padding) {
      this.y = this.j * cellsize + cellsize - padding;
    } else if (this.y < this.j * cellsize + padding) {
      this.y = this.j * cellsize + padding;
    }
    if (this.i > 0 && this.j > 0 && this.i < numcols - 1 && this.j < numrows - 1) {

      line(this.x, this.y, grid[this.i - 1][this.j].x, grid[this.i - 1][this.j].y);
      line(this.x, this.y, grid[this.i + 1][this.j].x, grid[this.i + 1][this.j].y);
      line(this.x, this.y, grid[this.i][this.j - 1].x, grid[this.i][this.j - 1].y);
      line(this.x, this.y, grid[this.i][this.j + 1].x, grid[this.i][this.j + 1].y);
    }
  }



}