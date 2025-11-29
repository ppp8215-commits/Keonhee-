let eyeLX, eyeRX, eyeY;
let pupilOffsetX = 0, pupilOffsetY = 0;
let mouthOpen = false;
let blink = false;
let jumpY = 0;
let hatY = 0;
let hatShake = false;
let bg = 200;
let blinkTimer = 0;

function setup() {
  createCanvas(600, 400);
  frameRate(30);
}

function draw() {
  background(bg);

  const cx = width / 2;
  const cy = height / 2 + jumpY;

  blinkTimer++;
  if (blinkTimer > 60) {
    blink = random() < 0.03;
    if (blink) blinkTimer = 0;
  }

  if (hatShake) {
    hatY = sin(frameCount * 10) * 8;
  } else {
    hatY = 0;
  }

  pupilOffsetX = constrain(map(mouseX, 0, width, -6, 6), -6, 6);
  pupilOffsetY = constrain(map(mouseY, 0, height, -4, 4), -4, 4);

  eyeLX = cx - 40;
  eyeRX = cx + 40;
  eyeY = cy - 20;

  fill(0);
  ellipse(cx, cy - 40, 220, 260);
  rect(cx - 110, cy - 100, 220, 80, 40);

  fill(255, 224, 189);
  ellipse(cx - 90, cy + 10, 24, 40);
  ellipse(cx + 90, cy + 10, 24, 40);

  fill(255, 224, 189);
  ellipse(cx, cy, 180, 220);

  fill(255);
  if (!blink) {
    ellipse(eyeLX, eyeY, 40, 25);
    ellipse(eyeRX, eyeY, 40, 25);

    fill(0);
    ellipse(eyeLX + pupilOffsetX, eyeY + pupilOffsetY, 12, 12);
    ellipse(eyeRX + pupilOffsetX, eyeY + pupilOffsetY, 12, 12);
  } else {
    fill(0);
    rect(eyeLX, eyeY, 40, 3);
    rect(eyeRX, eyeY, 40, 3);
  }

  fill(230, 180, 160);
  triangle(cx, cy, cx - 10, cy + 30, cx + 10, cy + 30);

  if (mouthOpen) {
    fill(200, 0, 0);
    ellipse(cx, cy + 60, 50, 35);
    fill(255, 100, 100);
    ellipse(cx, cy + 60, 25, 20);
  } else {
    fill(200, 0, 0);
    ellipse(cx, cy + 60, 50, 18);
  }

  fill(30);
  arc(cx, cy - 100 + hatY, 220, 150, PI, TWO_PI);
  rect(cx - 110, cy - 100 + hatY, 220, 40, 20);

  fill(0);
  textSize(14);
  textAlign(CENTER);
  text(
    "클릭: 입 열기 / 마우스 이동: 눈동자 / 스페이스: 점프 / W: 모자 흔들기 / B: 깜빡이기 / G: 10초 GIF",
    width / 2,
    height - 20
  );
}

function mousePressed() {
  mouthOpen = !mouthOpen;
}

function keyPressed() {
  if (key === ' ') jumpY = -20;
  if (key === 'B' || key === 'b') blink = !blink;
  if (key === 'W' || key === 'w') hatShake = true;
  if (key === 'G' || key === 'g') saveGif('moving_caricature_park', 10);
}

function keyReleased() {
  if (key === ' ') jumpY = 0;
  if (key === 'W' || key === 'w') hatShake = false;
}
