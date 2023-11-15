

let schläger = {
    y: 350,
    x: 300,
    width: 50,
    height: 10,
    
    move: function () {
        if (gameMode == 1) {
            if (mouseX != schläger.x) {
                schläger.x = mouseX

                if (schläger.x + schläger.width / 2 > width) {
                    schläger.x = width - schläger.width / 2
                }
                if (schläger.x - schläger.width / 2 < 0) {
                    schläger.x = 0 + schläger.width / 2
                }

            }


        } else {
            let closestBall = -1;
            let distance = 5000;
            for (let i = 0; i < balls.length; i++) {
                if (abs(balls[i].y - 350) < distance) {
                    closestBall = i;
                    distance = abs(balls[i].y - 350)
                }

            }
            schläger.x = balls[closestBall].x
        }
    },
    draw: function () {
        schläger.move()
        rectMode(CENTER)
        rect(schläger.x, schläger.y - schläger.height / 2, schläger.width, schläger.height)
    }




}
