// variable for live video feed
var mirror;
// variable to save certian frames
// of the live feed as a PDF
var pic;
// variables which will load and play sound
// and make the sound reverb
var sound,reverb;

// sound is pre-loaded
function preload() {
	sound = loadSound('engineoff.wav');
}

function setup() {
	createCanvas(650,500);
	background(200);
	// will start recording so when mouse is pressed
	// a PDF can be saved on the computer
	pic = createPDF();
	pic.beginRecord();
	// will create a live video feed
	mirror = createCapture(VIDEO);
	mirror.size(650,500);
	// live video below canvas hidden
	mirror.hide();
	// will cause the sound to reverb
	reverb = new p5.Reverb();
	// stops original from playing over reverb
	// so only reverb can be heard
	sound.disconnect();
	reverb.process(sound,5,5);
}

function draw() {
	// live video will take up whole canvas
	image(mirror,0,0,650,500);
}

// function to save certian frames
// of the live feed as a PDF
function mousePressed() {
	pic.save();
}

// when any key is pressed the sound will play
function keyPressed() {
	sound.setVolume(0.2);
	sound.play();
}