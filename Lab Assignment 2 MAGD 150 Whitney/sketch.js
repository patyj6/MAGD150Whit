function setup() {
 	createCanvas(400,400);
 	background(25);
}

function draw() {
  	strokeWeight(1);			//code for stars
  	stroke(255);
  	point(55,50);
  	point(140,302);
  	point(68,103);
  	point(205,95);
  	point(306,10);
  	point(207,280);
  	point(92,190);
  	point(120,380);
  	point(30,390);
  	point(60,275);
  	point(149,126);
  	point(180,167);
  	point(232,361);
  	point(154,67);
  	point(290,166);
  	point(338,78);
  	point(240,42);
  	point(263,152);
  	point(176,241);
  	point(72,349);
  	point(40,162);
  	point(344,140);
  	point(236,210);
  	point(313,378);
  	point(368,362);
  	point(290,100);
  	point(328,219);
  	point(360,287);
  	point(369,295);
  	point(132,36);
  	point(380,202);
  	point(128,270);
  	point(25,230);
  	point(381,59);
  	point(340,42);
  	point(259,75);
  	point(104,142);

  	colorMode(RGB,255);

  	let i = color(255,0,0);		//code for space ship
  	fill(i);
  	noStroke();
  	triangle(150,100,155,110,145,110);	//front cone of ship
  	triangle(145,130,145,140,140,140);	//left wing
  	triangle(155,130,160,140,155,140);	//right wing

  	let l = color(100,100,100);
  	fill(l);
  	noStroke();
  	quad(146,110,154,110,154,130,146,130);	//gray part of body
  	quad(145,130,155,130,155,140,145,140);	//exhaust port

  	let k = color(255,255,255);
  	fill(k);
  	noStroke();
  	quad(155,110,145,110,155,130,145,130,);	//white part of body

  	let m = color(255,175,0);	//yellow-orange exhaust
  	fill(m);
  	noStroke();
  	arc(150,140,10,20,radians(0),radians(180));

  	let n = color(255,100,0);	//orange-red exhaust
  	fill(n);
  	noStroke();
  	arc(150,140,5,13,radians(0),radians(180));

  	let a = color(255,255,0);	//code for sun
  	fill(a);
  	noStroke();
  	ellipse(375,25,3,3);

  	let b = color(0,50,150);	//code for big blue planet
  	fill(b);
  	noStroke();
  	ellipse(275,275,100,100);

  	let c = color(0,50,100);	//code for craters on big blue planet
  	fill(c);
  	noStroke();
  	ellipse(270,270,20,20);
  	ellipse(250,307,5,5);
  	ellipse(305,260,15,15);
  	ellipse(292,306,25,25);
  	ellipse(280,240,8,8);
  	ellipse(245,290,10,10);
  	ellipse(260,300,13,13);
  	ellipse(255,255,13,13);

  	let g = color(0,200,100);	//code for green planet
  	fill(g);
  	noStroke();
  	ellipse(300,42,5,5);

  	colorMode(HSB,100);

  	let d = color(0,100,100);	//code for red moon of big blue planet
  	fill(d);
  	noStroke();
  	ellipse(338,330,20,20);

  	let e = color(0,100,50);	//code for craters on red moon
  	fill(e);
  	noStroke();
  	ellipse(339,333,8,8);
  	ellipse(335,325,3,3);

  	colorMode(CSS);				//I don't know how to correctly implement any other type of colorMode() other than RGB and HSB and I can't find any exxamples
  								        //of the other types of color modes in the power piont, on the p5.js website, or the textbook.
  	let f = color('magenta');	//code for small planet
  	fill(f);
  	nostroke();
  	ellipse(160,60,30,30);
}