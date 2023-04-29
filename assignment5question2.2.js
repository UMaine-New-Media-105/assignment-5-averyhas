// Assignment 5, Question 2 - Avery Haskell
// "Create a sketch that adds 50 moving bubbles to your canvas."

function setup() {
  createCanvas(960, 540);
  
  bubbles = [];

// Loop which draws 50 jittering bubbles.

  for (let bubblesDrawn = 0; bubblesDrawn < 50; bubblesDrawn++) {
    let thisX = random(width);
    let thisY = random(height);
    let thisR = random(5, 100)
    let thisHue = random(360);
    
// Call the class/constructor & create parameters.
    bubbles[bubblesDrawn] = new Bubble(thisX, thisY, thisR, thisHue);
  }
}

// Moves & Shows each bubble.
function draw() {
  background("black");
  
  for (let bubblesShown = 0; bubblesShown < bubbles.length; bubblesShown++) {
    // Call both Show + Move for the sprite(s).
    bubbles[bubblesShown].move();
    bubbles[bubblesShown].show();
  }
}

// Class which holds the "instructions" to create a bubble.
class Bubble {
// Set the parameters according to this class.
  constructor(x, y, r, hue) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = "hsla(" + parseInt(hue) + ", 100%, 90%, 1)";

  }
// Instructions to move the sprite.
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
// Instructions to draw the sprite.
  show() {
    push();
    stroke(this.color);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
    pop();
  }
}
