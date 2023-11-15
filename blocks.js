let blocks = []

class BlockCrtr {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
        this.x1 = this.x - this.width / 2;
        this.x2 = this.x + this.width / 2;
        this.y1 = this.y - this.width / 2;
        this.y2 = this.y + this.width / 2;
        this.draw = function () {
            rect(this.x, this.y, this.width, this.height)
        }
    }
}