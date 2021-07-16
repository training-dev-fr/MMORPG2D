export default class Square {
    constructor(x, y, tile) {
        this.x = x;
        this.y = y;
        //this.tile = tile;

        switch (Math.floor(Math.random() * 10)) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                this.tile = "GRASS";
                break;
            case 5:
            case 6:
            case 7:
                this.tile = "GROUND";
                break;
            case 8:
                this.tile = "TREE";
                break;
            case 9:
                this.tile = "BUSH";
                break;
        }
    }
}