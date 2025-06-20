let brushImages = [];
let currentBrush = 0;
const totalBrushes = 30;

function preload() {
  // Load 30 brush images
  for (let i = 0; i < totalBrushes; i++) {
    brushImages[i] = loadImage(`brush${i + 1}.jpg`);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  imageMode(CENTER);
  textFont('Arial');
  textSize(16);
  fill(0);
  noStroke();
}

function draw() {
  if (mouseIsPressed) {
    let img = brushImages[currentBrush];
    let size = random(20, 60);
    image(img, mouseX, mouseY, size, size);
  }

  // Show instructions
  drawInstructions();
}

function drawInstructions() {
  noStroke();
  fill(255, 255, 255, 180);
  rect(10, 10, 400, 90);
  fill(0);
  text("Brushes: 1–9, 0, '-', '=', 'q'–'k' → brushes 1–30", 20, 35);
  text("Press 'S' to save your drawing", 20, 60);
  text(`Current Brush: ${currentBrush + 1}`, 20, 80);
}

function keyPressed() {
  const brushMap = {
    '1': 0,  '2': 1,  '3': 2,  '4': 3,  '5': 4,
    '6': 5,  '7': 6,  '8': 7,  '9': 8,  '0': 9,
    '-': 10, '=': 11, 'q': 12, 'w': 13, 'e': 14,
    'r': 15, 't': 16, 'y': 17, 'u': 18, 'i': 19,
    'o': 20, 'p': 21, 'a': 22, 's': 23, 'd': 24,
    'f': 25, 'g': 26, 'h': 27, 'j': 28, 'k': 29
  };

  let lowerKey = key.toLowerCase();
  if (lowerKey in brushMap) {
    currentBrush = brushMap[lowerKey];
  }

  if (lowerKey === 's') {
    saveCanvas('myDrawing', 'png');
  }
}
