function setup() {
  createCanvas(1152, 768);
}

function draw() {
  background(255);

  noStroke();
  fill(190, 0, 40);
  rect(0, 0, width, 640);

  noFill();
  stroke(255);
  strokeWeight(6);
  rect(15, 15, width - 30, 640 - 30);

  stroke(0);
  strokeWeight(4);
  line(90, 90, width - 90, 90);
  line(90, 120, width - 90, 120);

  fill(255);
  stroke(0);
  strokeWeight(3);
  beginShape();
  vertex(160, 130);
  vertex(260, 80);
  vertex(210, 190);
  endShape(CLOSE);

  noStroke();
  fill(255, 204, 80);
  let cx = width / 2;
  let cy = 420;
  circle(cx, cy, 280);

  fill(160, 0, 40);
  circle(cx - 130, cy, 190);

  fill(240, 70, 90);
  circle(cx + 130, cy, 190);

  fill(255, 204, 80);
  rect(width - 260, 430, 160, 160);
}
