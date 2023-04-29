Challenge 1: "Create a sketch that adds 5 bubbles that jitter randomly."
Link: https://editor.p5js.org/averyhas/sketches/wBv8iRI4p

Following the instructions in the badge videos provided to us, I created 5 bubbles with white strokes at varying sizes which jitter across the canvas at randomly given x and y coordinates.

To do this, I created a Class titled Bubble, with ```constructor()```, ```move()```, and ```show()``` methods. Within the constructor method, I added parameters for the x and y coordinates, as well as the radius:

```Javascript
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
```

Within the move method, I added "instructions" to make the bubbles jitter around the canvas:

```Javascript
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
```

And finally, within the show method, I added "instructins" to draw the bubbles themselves:

```Javascript
  show() {
    push();
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
    pop();
  }
```

After this, I created 5 global variables for each bubble, titled bubble1 - bubble5, above the setup function. In the setup function, I called each bubble using the Bubble class, giving them random x and y coordinates + radius measurements:

```Javascript
  bubble1 = new Bubble(200, 200, 30);
  bubble2 = new Bubble(330, 300, 50);
  bubble3 = new Bubble(850, 150, 60);
  bubble4 = new Bubble(600, 280, 70);
  bubble5 = new Bubble(486, 354, 23);
```

Lastly, within draw, I added the instructions which called both the show and move methods within the class:

```Javascript
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
```

----------------------------------------------------------------------------------------------------------------------------------------------------------

Challenge 2: "Create a sketch that adds 50 moving bubbles to your canvas."
Link: https://editor.p5js.org/averyhas/sketches/whowjSpWj

Piggybacking off of the previous challenge, I used the code I created for the first assignment and modified it to add 50 bubbles at random across the canvas, at both varying sizes and colors.

In order to include the random color aspect to this design, I had to add a new parameter to my constructor method in the Bubble class:

```Javascript
    this.color = "hsla(" + parseInt(hue) + ", 100%, 90%, 1)";
```

I then changed the input for ```stroke()``` in the show method to include the ```this.color``` variable.
Then, in order to add 50 bubbles, I added a for loop within the setup function, which drew 50 bubbles at random across the canvas. I also addeda a bubbles array:

```Javascript
  bubbles = [];

// Loop which draws 50 jittering bubbles.

  for (let bubblesDrawn = 0; bubblesDrawn < 50; bubblesDrawn++) {
    let thisX = random(width);
    let thisY = random(height);
    let thisR = random(5, 100)
    let thisHue = random(360);
```

Within the draw function, I added another for loop:

```Javascript
  for (let bubblesShown = 0; bubblesShown < bubbles.length; bubblesShown++) {
    // Call both Show + Move for the sprite(s).
    bubbles[bubblesShown].move();
    bubbles[bubblesShown].show();
  }
```

----------------------------------------------------------------------------------------------------------------------------------------------------------

Challenge 3: Design 3 objects for a simulation environment.
Link: https://editor.p5js.org/averyhas/sketches/jGXfv5hOk

For the third challenge, which created elements for my final game design, I chose to use flowers for my particle sprites, butterflies for my breeder sprites, and birds for my catcher sprites.

I used the same method that was used for the previous challenege in order to have the flower particles jitter randomly across the background. I then used classes for both the breeders (butterflies) and the catchers (birds). However, instead of a move method, I changed it to an update method. By modifying the update movement, I was able to have the breeders and catchers bounce back and forth across the canvas, being spawned at random, and using loops and global variables, I was able to have multiple of each sprite type generate.

----------------------------------------------------------------------------------------------------------------------------------------------------------

Challenge 4: Activate breeders.
Link: https://editor.p5js.org/averyhas/sketches/qs5AYKEaG

Using the badge videos provided to us, I was able to have my breeder sprites "breed" when two overlap, with an added delay between each offspring--to ensure that multiple butterflies weren't created from one overlapping interaction. Using new global variables, ```spriteWidth```, ```spawnDelay```, ```addX```, ```breedersToStart```, ```catchersToStart```, and ```framesDelayed```. I was able to globally set the number of catchers and breeders, the width for each sprite (for collision detection), the global speed for each sprite, and an added delay between each overlap between breeders and offspring spawn time.

I created a new ```function isTouching()```, which incorporated the distance between each sprite:

```Javascript
function isTouching(sprite1, sprite2){
  let spriteDistance = dist(sprite1.x, sprite1.y, sprite2.x, sprite2.y);
  if (spriteDistance < spriteWidth){
    return true;
  } else {
    return false;
  }
}
```

Then using loops within draw, I updated the breeders while adding collision detection using the new function created:

```Javascript
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
```

----------------------------------------------------------------------------------------------------------------------------------------------------------

Challenge 5: Activate catchers.
Link: https://editor.p5js.org/averyhas/sketches/E8uE3vOhC

Using the same code from the previous challenge, as well as the new ```splice()``` code, I updated the catchers so that, when a catcher overlaps with a breeder, the breeder is removed from the canvas. 

```Javascript
    for (let breedersLeft = 0; breedersLeft < breeders.length; breedersLeft++){
      let proposedCatch = breeders[breedersLeft];
      if (isTouching(thisCatcher, proposedCatch)){
        breeders.splice(breedersLeft, 1);
        thisCatcher.health = startHealth;
        break;
      }
    }
```

I also, using a new global variable ```startHealth()```, added a loop which removes a catcher if it does not "eat" enough of the breeders (butterflies).

```Javascript
    if (thisCatcher.health < 0){
      catchers.splice(catchersShown, 1)
    }
```
