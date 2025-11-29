function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);

  let cx = width / 2;
  let cy = 220;

  noStroke();
  fill(255, 224, 189);
  ellipse(cx, cy, 180, 220);

  fill(255, 224, 189);
  ellipse(cx - 90, cy, 30, 50);
  ellipse(cx + 90, cy, 30, 50);

  fill(0);
  ellipse(cx, cy - 100, 200, 120);
  ellipse(cx, cy - 50, 200, 70);

  fill(0);
  arc(cx, cy, 180, 220, PI + 0.2, TWO_PI - 0.2);

  fill(255);
  ellipse(cx - 35, cy - 20, 35, 25);
  ellipse(cx + 35, cy - 20, 35, 25);

  fill(0);
  ellipse(cx - 35, cy - 20, 10, 10);
  ellipse(cx + 35, cy - 20, 10, 10);

  fill(230, 200, 180);
  triangle(cx, cy - 5, cx - 15, cy + 30, cx + 15, cy + 30);

  fill(200, 20, 20);
  ellipse(cx, cy + 60, 50, 35);

  fill(255, 100, 100);
  ellipse(cx, cy + 60, 25, 15);
}
