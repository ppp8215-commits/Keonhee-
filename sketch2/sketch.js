let mainAngle = 0;
let triOffset = 0;
let squareAngle = 0;

function setup() {
  createCanvas(1280, 720);
}

function draw() {
  background(190, 20, 50);

  stroke(255);
  strokeWeight(10);
  noFill();
  rect(10, 10, width - 20, height - 20);

  stroke(0);
  strokeWeight(6);
  line(70, 90, width - 70, 90);
  line(130, 120, width - 70, 120);

  noStroke();
  fill(245, 191, 63);
  const centerX = width / 2;
  const centerY = height / 2 + 40;
  const mainR = 420;
  
  let wobble = sin(frameCount * 0.02) * 10;
  ellipse(centerX, centerY + wobble, mainR, mainR);

  fill(232, 72, 87);
  let earOffset = cos(frameCount * 0.03) * 20;
  ellipse(centerX - 220, centerY - 40 + earOffset, 260, 260);
  ellipse(centerX + 220, centerY - 40 - earOffset, 260, 260);

  stroke(0);
  strokeWeight(3);
  fill(255);
  push();
  translate(0, sin(frameCount * 0.04) * 15);
  beginShape();
  vertex(260, 210);
  vertex(340, 190);
  vertex(270, 280);
  endShape(CLOSE);
  pop();

  push();
  rectMode(CENTER);
  translate(width - 260, height - 200);
  rotate(radians(25) + sin(frameCount * 0.02) * 0.2);
  noStroke();
  fill(252, 232, 120);
  rect(0, 0, 220, 220);
  pop();
}
