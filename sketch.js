function setup() {
createCanvas(600, 600);
}


function draw() {
 rect(mouseX, mouseY, 75, 75)
if (mouseX > 300) {
  fill('rgba(50%,0%,0%,.6)')
}
else {
  fill(90,180,172,150)
}
}
