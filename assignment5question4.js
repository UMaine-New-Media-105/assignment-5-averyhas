// Assignment 5, Question 4 - Avery Haskell
// Activate breeders.

function setup() {
  createCanvas(960, 540);
  
  spriteWidth = 80
  spawnDelay = 90;
  addX = -3 // Global variable for speed.
  breedersToStart = 3;
  catchersToStart = 2;
  
  framesDelayed = 0;
  
  // Prepare particles.
  
  flowers = [];
  
  for (let particlesDefined = 0; particlesDefined < 50; particlesDefined++) {
    let x = random(width);
    let y = random(height);
    let flowerSize = random(0.1, 0.7);
    flowers.push(new Flower(x, y, flowerSize));
  }

// Prepare breeders.
  breeders = [];
  
  for (let breedersDefined = 0; breedersDefined < breedersToStart; breedersDefined++) {
    let x = random(width);
    let y = random(height);
    let bfSize = 0.7;
    breeders.push(new Butterfly(x, y, bfSize));
  }
  
// Prepare catchers.
  catchers = [];
  
  for (let catchersDefined = 0; catchersDefined < catchersToStart; catchersDefined++) {
    let x = random(470, 940);
    let y = random(height);
    let birdSize = 0.6
    
    catchers.push(new Bird(x, y, birdSize));
  }
}

function draw() {
  background("paleturquoise");
  framesDelayed++; // Prevents one collision from spawning multiple offspring.
  
  // Update particles.
  for (let particlesShown = 0; particlesShown < flowers.length; particlesShown++) {
    flowers[particlesShown].update();
    flowers[particlesShown].show();
  }

// Update breeders.
  for (let breedersShown = 0; breedersShown < breeders.length; breedersShown++ ) {
    let thisBreeder = breeders[breedersShown]
    thisBreeder.update();
    thisBreeder.show();
// Look through potential mates to find any overlap.
    if (framesDelayed > spawnDelay){
    for (let matesChecked = 0; matesChecked < breeders.length; matesChecked++){
      let proposedMate = breeders[matesChecked];
      let isDifferentBreeder = (breedersShown !== matesChecked);
      let spriteDistance = dist(thisBreeder.x, thisBreeder.y, proposedMate.x, proposedMate.y);
            if (isDifferentBreeder && isTouching(thisBreeder, proposedMate)){
        let x = random(width);
        let y = random(height);
        breeders.push(new Butterfly(x, y));
        framesDelayed = 0;
        break;
    }
    }
    }
  }

// Update catchers
  for (let catchersShown = 0; catchersShown < catchers.length; catchersShown++ ) {
    let thisCatcher = catchers[catchersShown];
    thisCatcher.update();
    thisCatcher.show();

  }
}

function isTouching(sprite1, sprite2){
  let spriteDistance = dist(sprite1.x, sprite1.y, sprite2.x, sprite2.y);
  if (spriteDistance < spriteWidth){
    return true;
  } else {
    return false;
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
  update() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
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
    this.isFlyingRight = false;
    this.lifespan =
  
  }
  update() {
    this.x = this.x + this.addX ; 
    let isTooFarLeft = (this.x < 0);
    let isTooFarRight = (this.x > width);
    if (isTooFarLeft || isTooFarRight ) {
      this.addX = -this.addX ; 
      this.y = random(height)
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
    let isTooFarLeft = (this.x < 0);
    let isTooFarRight = (this.x > width);
    if (isTooFarLeft || isTooFarRight ) {
      this.addX = -this.addX ; 
      this.y = random(height) 
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
