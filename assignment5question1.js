// Assignment 5, Question 1 - Avery Haskell
// "Create a sketch that adds 5 bubbles that jitter randomly."

let bubble1;
let bubble2;
let bubble3;
let bubble4;
let bubble5;

function setup() {
  createCanvas(960, 540);
  
// Calling the x, y, & r variables set in constructor.
  bubble1 = new Bubble(200, 200, 30);
  bubble2 = new Bubble(330, 300, 50);
  bubble3 = new Bubble(850, 150, 60);
  bubble4 = new Bubble(600, 280, 70);
  bubble5 = new Bubble(486, 354, 23);

}

// Moves & Shows each bubble.
function draw() {
  background("black");
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
  bubble3.move();
  bubble3.show();
  bubble4.move();
  bubble4.show();
  bubble5.move();
  bubble5.show();
}

// Class which holds the "instructions" to create a bubble.
class Bubble {

  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  show() {
    push();
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
    pop();
  }
}
