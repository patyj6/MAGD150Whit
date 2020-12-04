// variables for background colors
var a,b,c,d,e,f,g;
// radius of the sun
var r;
// radius of car wheels
var wheelR;
// Value x will be the base which all points
// defining the position of all the shapes 
// that make up the car.
var x = 50;

function setup() {
	createCanvas(700,400);
}

function draw() {
	// function for background
	grassTreesAndSky();
	// function for sun
	sun();
	// function for car
	car();
}

function grassTreesAndSky () {
	// color of the sky
	a = color(15,135,255);
	// color of the grass and tree leaves
	b = color(23,230,26);
	// color of tree bark
	c = color(92,55,10);
	// color of the road
	e = color(79,83,89);
	// The radius of the sun is 25 pixles.
	rad = 25

	push();

	// Translation of canvas sets 0,0
	// point to middle of canvas.
	translate(350,200);

	// rectMode set to corners
	rectMode(CORNERS);
	// ellipseMode set to radius
	ellipseMode(RADIUS);

	// sky
	fill(a);
	noStroke();
	rect(-350,-200,350,200);


	// makes grass and leaves green
	fill(b);
	rect(-350,100,350,200);
	// leaves for left tree
	rect(-280,20,-190,60);
	rect(-255,0,-215,60);
	// leaves for middle tree
	rect(-10,20,80,60);
	rect(15,0,55,60);
	// leaves for right tree
	rect(170,20,260,60);
	rect(195,0,235,60);


	// makes truncks brown
	fill(c);
	// trunk for left tree
	rect(-250,60,-220,120);
	// trunck for middle tree
	rect(20,60,50,120);
	// trunk for right tree
	rect(200,60,230,120);


	// road
	fill(e);
	rect(-350,140,350,180);

	pop();
}

function sun () {
	// Push and pop are too keep the rotate
	// comand seperated because it would
	// otherwise mess with the positioning
	// of the car.

	push();

	// ellipseMode set to radius
	ellipseMode(RADIUS);
	// color of the sun
	d = color(255,234,46);


	// scaler for the sun radius
	translate(660,40);
	scale(2);
	// rotates the sun by 90 deggrees,
	// even if you can't see it
	rotate(radians(90));


	// position of the sun
	fill(d);
	noStroke();
	ellipse(0,-0,8,8);
	stroke(d);
	// the lines are the sun rays coming
	// from the sun
	line(0,0,0,-12);
	line(0,0,-12,0);
	line(0,0,0,12);
	line(0,0,12,0);
	line(0,0,-8.5,-8.5);
	line(0,0,8.5,8.5);
	line(0,0,8.5,-8.5);
	line(0,0,-8.5,8.5);

	pop();
}

function car () {

	push();

	// rectMode set to corners
	rectMode(CORNERS);
	// ellipseMode set to radius
	ellipseMode(RADIUS);
	// color of car chassis
	e = color(207,48,48);
	// color of car wheels
	g = color(28,27,27);
	// radius of car wheels is
	wheelR = 7
	// chassi of the car
	fill(e);
	rect(x,330,x+80,352,);
	rect(x+20,320,x+60,330);
	// wheels of the car
	fill(g);
	ellipse(x+15,352,wheelR,wheelR);
	ellipse(x+65,352,wheelR,wheelR);
	// Every second var x will move 60 pixles
	// bringing yhe car with it because all
	// the x positions of the shapes are 
	// tied to x.
	x+=4;

	if (x > 850) {
		x = -50
	}

	pop();
}