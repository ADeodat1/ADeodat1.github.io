//PONG
var xBall = 100;
var yBall = 100;
var xSpeed = 5;
var ySpeed = 3;
var leftPaddle = 100
var rightPaddle = 100


function setup () {
  createCanvas(600, 400);
}

function draw() {
 background(0);
fill('rgba(100%,0%,0%,1)')
ellipse(xBall, yBall, 20, 20)
xBall = xBall + xSpeed;
yBall = yBall + ySpeed;
//BALL MOVEMENT
if (yBall >= 390) {
  ySpeed = -1 * ySpeed
}
if (yBall <= 10) {
  ySpeed = -1 * ySpeed
}
if (xBall >= 585 && yBall <= rightPaddle + 50 && yBall >= rightPaddle) {
  xSpeed = -1 * xSpeed
}
if (xBall <= 15 && yBall <= leftPaddle + 50 && yBall >= leftPaddle) {
  xSpeed = -1 * xSpeed
}

fill('rgba(0%,0%,100%,1)')
//LEFT PADDLE
rect(0, leftPaddle, 10, 50)
if (keyIsDown(87)) {
  leftPaddle = leftPaddle - 5
}
if (keyIsDown(83)) {
  leftPaddle = leftPaddle + 5
}
//RIGHT PADDLE
rect(590, rightPaddle, 10, 50)
if (keyIsDown(87)) {
  rightPaddle = rightPaddle - 5
}
if (keyIsDown(83)) {
  rightPaddle = rightPaddle + 5
}








}
