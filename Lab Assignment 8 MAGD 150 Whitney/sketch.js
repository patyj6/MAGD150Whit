// variables for pictures
var pic1,pic2;
// variables for fonts
var font1,font2;
// variable so canvas can be saved as a PDF
var savePDF;
// variable created to laod string of text
var textString = [];
// variables for the x positions for the two
// visible strings of text
var textX1 = 300;
var textX2 = 180;

function preload() {
	// both pictures are preloaded
	pic1 = loadImage("mountain.jpeg");
	pic2 = loadImage("beaned.jpg");
	// both fonts are preloaded
	font1 = loadFont("ALGER.TTF");
	font2 = loadFont("comic.TTF");
	// loading a string of text from an external file
	textString = loadStrings("text.txt");
}

function setup() {
	createCanvas(500,500);
	// setting up the ability to save
	// the canvas as a PDF
	savePDF = createPDF();
	savePDF.beginRecord();
}

function draw() {
	// picture of mountain gray-scaled
	pic1.filter(GRAY);
	image(pic1,0,0,width,height);
	// picture of bean man tinted red
	push();
	tint(235,77,77);
	image(pic2,150,200,170,100);
	pop();
	// creating the first line of text
	textFont(font1);
	fill(0);
	textSize(30);
	textAlign(RIGHT);
	text("Revenge of the",textX1,175);
	// creating the second line of text
	textSize(45);
	fill(242,36,22);
	textAlign(LEFT);
	text("BEANED MAN",textX2,350);
	// prints the string of text into the console
	print(textString);
	// prints the x positions of the two
	// visible stings
	print(textX1);
	print(textX2);
	// each frame 
	textX1 += 10;
	textX2 += -10;
	// when the x positions of the two strings reaches
	// a certain value, they will be taken to the opposite
	// side of the screen
	if (textX1 >= 755 && textX2 <= -275) {
		textX1 = 0;
		textX2 = 510;
	}
}

function mousePressed() {
	// if the mouse is pressed the canvas is
	// saved to a PDF
	savePDF.save();
}