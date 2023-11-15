let balls = []
class BallCreatr {
    constructor() {

        this.x = width / 2;
        this.y = 200;
        this.vx = 0;
        this.vy = 1;
        this.speed = 10;
        this.size = 8;
        this.radius = this.size / 2
        this.direction = 90;
        this.move = function () {

            //push()
            if (this.collideswith(schläger)) {
                //makes new rotation based on distance to center of player
                let dist = (this.x - schläger.x) / schläger.width
                this.direction = map(dist, -0.5, 0.5, 180, 360)
                this.direction += random(-15, 15)
                this.vx = cos(this.direction)
                this.vy = sin(this.direction)
                // console.log(dist)



            }
            if (this.y <= 0) { //top boundry
                this.vy *= -1
            }
            if (this.y >= height) { //bottom boundry
                this.vy *= -1
            }
            if (this.x >= width) { //right boundry
                this.vx *= -1
            }
            if (this.x <= 0) { //left boundry
                this.vx *= -1
            }
            for (let i = 0; i < blocks.length; i++) {
                if (this.collideswith(blocks[i])) {
                    fill(255, 0, 0)
                    this.collisionResponse(blocks[i])
                    if(random(0,50)<1){
                    powerups.push(new powerUpCrtr(blocks[i].x, blocks[i].y))}
                    blocks.splice(i, 1)
                }
            }
            this.x += this.speed * this.vx //cos(this.direction)
            this.y += this.speed * this.vy//sin(this.direction)



        };
        this.collisionResponse = function (rect) {
            let left = dist(this.x, this.y, rect.x1, rect.y)
            let right = dist(this.x, this.y, rect.x2, rect.y)
            let top = dist(this.x, this.y, rect.x, rect.y1)
            let bottom = dist(this.x, this.y, rect.x, rect.y2)
            if (left < right && left < top && left < bottom) { //left border response
                this.vx *= -1


            } else
                if (right < top && right < bottom) { //right border response
                    this.vx *= -1

                } else
                    if (top < bottom) { //top border response

                        this.vy *= -1
                    } else { //bottom border response

                        this.vy *= -1
                    }



        }
        this.collideswith = function (rect) {
            // returns true if the rectangle and ball are colliding

            let distX = Math.abs(this.x - rect.x);
            let distY = Math.abs(this.y - rect.y)// + rect.height / 2);

            if (distX >= (rect.width / 2 + this.size / 2)) { return false; }
            if (distY >= (rect.height / 2 + this.size / 2)) { return false; }

            if (distX <= (rect.width / 2)) { return true; }
            if (distY <= (rect.height / 2)) { return true; }

            let dx = distX + width / 4;
            let dy = distY + height / 4;
            return (dx * dx + dy * dy <= (this.size * this.size));



        }
        this.draw = function () {
            push();

            this.move();

            circle(this.x, this.y, this.size)
            pop();


        }
    }
}