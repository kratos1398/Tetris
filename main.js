let x = 40;
let y = 40;

function setup() {
    createCanvas(1280, 720);
    background(0, 0, 0);
}

function draw() {
    background(0, 0, 0);
    ellipse(x, y, 50);
    keyPressed();
}

function keyPressed() {
    if (keyIsPressed === true) {
        if (keyCode === UP_ARROW) {
            y -= 5;
        } else if (keyCode === DOWN_ARROW) {
            y += 5;
        } else if (keyCode === LEFT_ARROW) {
            x -= 5;
        } else if (keyCode === RIGHT_ARROW) {
            x += 5;
        } else if (keyCode === UP_ARROW && RIGHT_ARROW) {
            x += 2.5;
            y += 2.5;
        }
    }
}