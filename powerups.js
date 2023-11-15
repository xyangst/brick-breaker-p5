let powerups = []
class powerUpCrtr {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.size = 15;
        this.move = function () {
            this.y++
            

        }
        this.draw = function () {
            this.move()
            circle(this.x, this.y, 15)
            textSize(10)
            text("w", this.x - 3, this.y + 3)
        };
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

    }

}