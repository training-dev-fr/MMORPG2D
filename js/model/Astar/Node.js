export default class Node {
    constructor(square) {
        this.x = square.x;
        this.y = square.y;
        this.square = square;
        this.isBlocked = false;
        switch (square.tile.key) {
            case "TREE":
                this.isBlocked = true;
                break;
            case "GRASS":
                this.coeff = 1;
                break;
            case "GROUND":
                this.coeff = 0.8;
                break;
            case "BUSH":
                this.coeff = 9;
                break;
        }
        this.isBlocked = square.tile.key == "TREE";
    }

    heuristic(parent, destination) {
        this.parent = parent;
        this.g = this.parent.g + 1;
        this.h = (Math.abs(this.x - destination.x) + Math.abs(this.y - destination.y)) * this.coeff;
        this.f = this.h + this.g;
    }
}