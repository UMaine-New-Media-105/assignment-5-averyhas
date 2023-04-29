// Assignment 5, Question 3 - Avery Haskell
// Design 3 objects for a simulation environment.

function setup() {
  createCanvas(960, 540);
  
  flowers = [];

  for (let flowersDrawn = 0; flowersDrawn < 50; flowersDrawn++) {
    let thisX = random(width);
    let thisY = random(height);
    let flowerSize = random(0.1, 0.7);
    
    flowers[flowersDrawn] = new Flower(thisX, thisY, flowerSize);
  }
  
  butterflies = [];

  addX = 5;
  butterflies.push( new Butterfly(0, 200, 0.7)) ;
  
  for (let butterfliesCreated = 0; butterfliesCreated < 5; butterfliesCreated++) {
    let x = random(0, 470);
    let y = random(height);
    let bfSize = 0.7;
    butterflies.push(new Butterfly(x, y, bfSize));
  }
  
  birds = [];

  addX = 5;
  birds.push( new Bird(470, 200, 0,6)) ;
  
  for (let birdsCreated = 0; birdsCreated < 5; birdsCreated++) {
    let x = random(470, 940);
    let y = random(height);
    let birdSize = 0.6
    birds.push(new Bird(x, y, birdSize));
  }
}

function draw() {
  background("paleturquoise");
  
  for (let flowersShown = 0; flowersShown < flowers.length; flowersShown++) {
    flowers[flowersShown].move();
    flowers[flowersShown].show();
  }
  
  for (let butterfliesShown = 0; butterfliesShown < butterflies.length; butterfliesShown++ ) {
    butterflies[ butterfliesShown ].show();
    butterflies[ butterfliesShown ].update();
  }
  
  for (let birdsShown = 0; birdsShown < birds.length; birdsShown++ ) {
    birds[ birdsShown ].show();
    birds[ birdsShown ].update();
  }
}

class Flower {
// Set the parameters according to this class.
  constructor(x, y, flowerSize) {
    this.x = x;
    this.y = y;
    this.size = flowerSize;
  }
// Instructions to move the sprite.
  move() {
    this.x = this.x + random(-3, 3);
    this.y = this.y + random(-3, 3);
  }
// Instructions to draw the sprite.
  show() {
    push();
    angleMode(RADIANS)
    translate(this.x, this.y)
    scale(this.size);
    for (let petalsDrawn = 0; petalsDrawn < 5; petalsDrawn++) 
    {
    fill("hsla(340, 60%, 85%, 0.5)");
    noStroke();
    rotate(5);
    ellipse(0, 0, 60, 200);
    }
    pop();
  }
}

class Butterfly {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.addX = addX; 
  }
  update() {
    this.x = this.x + this.addX ; 
    if (this.x < 0 || this.x > width ) {
      this.addX = -this.addX ; 
    }
  }
  show() {
    push();
    angleMode(DEGREES)
    translate(this.x, this.y);
    scale(this.size);
    stroke("black");
    strokeWeight(2);
    fill("orange");
    arc(-25, 0, 50, 50, -90, 90);
    arc(25, 0, 50, 50, 90, 270);
    fill("black")
    ellipse(0, 0, 6, 40)
    pop();
  }
}

class Bird {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.addX = addX; 
  }
  update() {
    this.x = this.x + this.addX ; 
    if (this.x < 0 || this.x > width ) {
      this.addX = -this.addX ; 
    }
  }
  show() {
    push();
    angleMode(DEGREES)
  translate(this.x, this.y)
  scale(this.size)
  fill("burlywood");
  noStroke();
  arc(0, 0, 150, 150, 0, 180);
  stroke("black");
  arc(0, 10, 50, 70, 0, 180);
  noStroke();
  ellipse(-65, -20, 80)
  fill("black")
  ellipse(-85, -25, 15)
  fill("orange")
  triangle(-105, -20, -100, 0, -120, -10);
  fill("black");
  rect(-15, 74, 3, 20)
  rect(-5, 75, 3, 20)
    pop();
  }
}
