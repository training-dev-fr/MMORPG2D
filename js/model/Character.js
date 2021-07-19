import Canvas from "./Canvas.js";

export default class Character {
    constructor(name, type, x, y, direction) {
        this.canvas = new Canvas();
        this.canvas.setStep(game.map.size);
        this.name = name;
        this.type = type;
        this.position = { x: x, y: y };
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
        this.canvas.draw(this.file, this.tile, { x: this.position.x, y: this.position.y });
    }

    animate() {
        setInterval(() => {
            this.canvas.clear();
            this.nextTile();
            this.canvas.draw(this.file, this.tile, { x: this.position.x, y: this.position.y });
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

    async moveTo(path) {
        for (let square of path) {
            if (square.position.x == this.position.x && square.position.y == this.position.y) {
                continue;
            }
            this.tile.direction = this.getDirection(square.position);
            let frame = 0;
            let next = true;
            while (next) {
                frame = frame + (1 / square.weight);
                if (frame >= 24) {
                    frame = 23;
                    next = false;
                }
                this.canvas.clear();
                this.tile.value = Math.floor(frame / 6);
                this.tile.key = this.tile.direction + this.tile.value;
                this.canvas.drawPixel(this.file, this.tile, this.getMovementPixel({
                    number: frame,
                    total: 24
                }));
                await new Promise(resolve => setTimeout(resolve, 42));
            }
            this.position = square.position;
        }
        this.tile.value = 0;
        this.tile.key = this.tile.direction + this.tile.value;
        this.canvas.clear();
        this.canvas.draw(this.file, this.tile, this.position);
    }

    getDirection(position) {
        switch (true) {
            case position.x > this.position.x:
                return "RIGHT";
                break;
            case position.x < this.position.x:
                return "LEFT";
                break;
            case position.y > this.position.y:
                return "BOTTOM";
                break;
            case position.y < this.position.y:
                return "TOP";
                break;
        }
    }

    getMovementPixel(frame) {
        switch (this.tile.direction) {
            case "RIGHT":
                return {
                    x: (this.position.x * this.canvas.stepX) + (this.canvas.stepX * frame.number / frame.total),
                    y: this.position.y * this.canvas.stepY
                }
            case "LEFT":
                return {
                    x: (this.position.x * this.canvas.stepX) - (this.canvas.stepX * frame.number / frame.total),
                    y: this.position.y * this.canvas.stepY
                }
            case "BOTTOM":
                return {
                    x: this.position.x * this.canvas.stepX,
                    y: (this.position.y * this.canvas.stepY) + (this.canvas.stepY * frame.number / frame.total)
                }
            case "TOP":
                return {
                    x: this.position.x * this.canvas.stepX,
                    y: (this.position.y * this.canvas.stepY) - (this.canvas.stepY * frame.number / frame.total)
                }
        }
    }
}