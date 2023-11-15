let gameMode = 1
let gmBUTTON
function test() {
  gameMode *= -1
}
function setup() {
  gmBUTTON = createButton("setgamemode!!")
  gmBUTTON.mousePressed(test)
  gmBUTTON.position(0, 0)
  angleMode(DEGREES)
  createCanvas(400, 400);
  for (let i = 0; i < 50; i++) {
    balls[i] = new BallCreatr();
    balls[i].x = 150
  }
  for (let i = 0; i < 320; i++) {
    blocks[i] = new BlockCrtr(5 + (i % 40) * 10, 5 + floor(i / 40) * 10)
  }
}

function draw() {

  background(220);
  schläger.draw();
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].draw()
  }
  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    if (balls[i].y > height) {
      balls.splice(i, 1)
    }
  }
  for (let i = 0; i < powerups.length; i++) {
    let splicing = 0
    powerups[i].draw();
    if (powerups[i].y > height + 15) {
      splicing = 1
    }
    if (powerups[i].collideswith(schläger)) {
      splicing = 1
      balls.push()
    }
    if (splicing != 0) {
      powerups.splice(i, 1)
    }
  }
}
