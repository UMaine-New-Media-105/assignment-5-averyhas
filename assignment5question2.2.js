// Assignment 5, Question 2 - Avery Haskell
// "Create a sketch that adds 50 moving bubbles to your canvas."

function setup() {
  createCanvas(960, 540);
  
  flowers = [];

// Loop which draws 50 jittering bubbles.

  for (let flowersDrawn = 0; flowersDrawn < 50; flowersDrawn++) {
    let thisX = random(width);
    let thisY = random(height);
    let flowerSize = random(0.1, 0.7);
    // let flowerColor = fill("hsla( 340, 60%, 65%, random(0.1, 0.5) )")
    
// Call the class/constructor & create parameters.
    flowers[flowersDrawn] = new Flower(thisX, thisY, flowerSize);
  }
}

// Moves & Shows each flower.
function draw() {
  background("paleturquoise");
  
  for (let flowersShown = 0; flowersShown < flowers.length; flowersShown++) {
    // Call both Show + Move for the sprite(s).
    flowers[flowersShown].move();
    flowers[flowersShown].show();
  }
}

// Class which holds the "instructions" to create a bubble.
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
