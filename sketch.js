//set of global variables
let penSize = 1; //defines the original state of the stroke thickness
let penState = 0; //defines the original state of the brush style
let frogBrush; //variable for the frog shaped brush

function setup() {
  createCanvas(950, 800); //set the size of the drawing canvas 
  background(95, 194, 121) //defines the color of the welcome page
  
  //welcome page text: defines the text size, content, and location
  textSize(33); text('WELCOME! Click ME and press E to proceed', 10, 30);
  
  //custom function to load the png brush on to the canvas
  frogBrush = loadImage('frogster.png'); 
}

//custom function that uses the if variable to decide which penstate represets which brush
function draw() {
  if (mouseIsPressed) {
    
    //tracks mouse point axis
    if (penState == 0) {
	    line(mouseX, mouseY, pmouseX, pmouseY); 
    } 
    
    //tracks mouse point axis and defines ellipse size
    if (penState == 1) {
	    ellipse(mouseX, mouseY, 10, 10); 
    }
    
    //tracks mouse axis and adjusts points to create cross
    if (penState == 2) {
      line(mouseX-5, mouseY-5, mouseX+5, mouseY+5); 
      line(mouseX+5, mouseY-5, mouseX-5, mouseY+5);
    }
    
    //tracks mouse axis, links frog brush and adjusts frog to the center
    if (penState == 3) {translate(mouseX-250, mouseY-250);
 	image(frogBrush, 0, 0);                  
}
  }
}

function keyTyped() {
  if (key == 'e') {
    background(195, 212, 176); //defines background color of drawing canvas
    //text size and contents for the drawing pad instructions
    textSize(15); text('Colors: R=Red, B=Blue, W=White / Brushes: C=Circle, X=Cross, F=Frog / E=Erase Canvas / Arrow Up: Stroke+, Arrow Down: Stroke-', 10, 30);
    
  }
    //red
  if (key == 'r') {
    stroke(255, 0, 0);
  }
    //white
  if (key == 'w') {
    stroke(225, 225, 225);
  }
    // blue 
  if (key == 'b') {
    stroke(0, 0, 255);
  }
    // cross brush
  if (key == 'x') {
    penState = 2;
  }
    // circle brush
  if (key == 'c') {
    penState = 1;
  }
   // frog brush
  if (key == 'f') {
    penState = 3;
 }
}

//custom function to control the stroke thickness, linked with the arrow keys
function keyPressed() {
	if (keyCode == DOWN_ARROW && penSize > 1) {
    penSize -= 1;
  }
  
  if (keyCode == UP_ARROW) {
		penSize += 1;
  }
    
  strokeWeight(penSize);
}
      

      
      
      
      
      