import Canvas from "./Canvas.js";

export default class Character {
    constructor(name, type, x, y, direction) {
        this.canvas = new Canvas();
        this.canvas.setStep(game.map.size);
        this.name = name;
        this.type = type;
        this.x = x;
        this.y = y;
        this.direction = direction;

        switch (this.type) {
            case "Man":
                this.life = 50;
                this.file = "char1";
                break;
            case "Vampyre":
                this.life = 30;
                this.file = "char2";
                break;
            case "Monk":
                this.life = 80;
                this.file = "char3";
                break;
        }

        this.tile = {
            namespace: "CHAR",
            key: direction + "0",
            direction: direction,
            value: 0
        }
    }

    display() {
        this.canvas.draw(this.file, this.tile, { x: this.x, y: this.y });
    }

    animate() {
        setInterval(() => {
            this.canvas.clear();
            this.nextTile();
            this.canvas.draw(this.file, this.tile, { x: this.x, y: this.y });
        }, 150);
    }

    nextTile() {
        if (this.tile.value >= 3) {
            this.tile.value = 0;
        } else {
            this.tile.value += 1;
        }
        this.tile.key = this.tile.direction + this.tile.value;
    }
}