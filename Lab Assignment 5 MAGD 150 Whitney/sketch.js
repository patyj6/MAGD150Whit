// variables for ellipse button point and radii
var cx,cy,rad,rad;
// variables for rect button corners
var l,r,t,b;
// variables for random ellipse center point
var n,m;
// etablishing screenColor varaible
var screenColor;
// etablishing circleColor varaible
var circleColor;
// etablishing rectColor varaible
var rectColor;
// booleans tests for buttons
var screenToggle1 = false;
var screenToggle2 = false;

function setup() {
  createCanvas(700,500);
  background(200);
  frameRate(10);

  // numbers assigned to rect variables
  // for positions
  l = 400
  r = 470
  t = 370
  b = 420
  // numbers assigned to ellipse
  // variables for positions
  cx = 520
  cy = 395
  rad = 25
  // color of screen
  screenColor = color(255,0,0);
  // color of circle button
  circleColor = 255;
  // color of rect button
  rectColor = 0;
}

function draw() {
	rectMode(CORNERS);
	ellipseMode(RADIUS);

	// antenna for tv
	stroke(0);
	strokeWeight(3);
	line(300,5,350,100);
	line(360,20,350,100);

	// housing for tv
	fill(25);
	rect(100,100,600,450);
	rect(150,450,160,500);
	rect(540,450,550,500);
	
	// screen for tv
	if (screenToggle1){
 		screenColor = color(0,255,0);
	} else if (screenToggle2){
  		screenColor = color(0,0,255);
	} else {
  		screenColor = color(255,0,0);
	}
	fill(screenColor);
	rect(150,150,550,350);

	// If the mouse is over the rect button
	// the rect button will lighten up.
	if (mouseX > l && mouseX < r && mouseY > t && mouseY < b) {
		rectColor = 75;
	} else {
		rectColor = 0;
	}
	// If the mouse is over the circle button
	// then the circle will darken a little bit.
	if (dist(mouseX, mouseY, cx, cy) < rad) {
		circleColor = 150;
	} else {
		circleColor = 255;
	}

	// rect and ellipse button positions
	stroke(255);
	strokeWeight(1);
	fill(rectColor);
	rect(l,t,r,b);
	fill(circleColor);
	noStroke();
	ellipse(cx,cy,rad,rad);

	// code for random ellipse placement
	var f = floor(random(3));
	switch(f) {
		case 0:
			n = 350;
			m = 250;
			break;
		case 1:
			n = 300;
			m = 250;
			break;
		case 2:
			n = 400;
			m = 250;
			break;
	}
	// placement, size, and position of random ellipse
	fill(0);
	ellipse(n,m,15,15);
	// text for rect and ellipse button
	fill(255);
	text("green",420,397);
	fill(0);
	text("blue",509,397);
}

function mousePressed(){
	// if the mouse is pressed over the rect button
	// then the screen will change to blue.
	if (mouseX > l && mouseX < r && mouseY > t && mouseY < b) {
		screenToggle1 = !screenToggle1;
	}
	// if the mouse is pressed over the circle button
	// then the screen will change to green.
	if (dist(mouseX, mouseY, cx, cy) < rad) {
		screenToggle2 = !screenToggle2;
	} 
}