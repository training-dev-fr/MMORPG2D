import Tiles from '/data/Tiles.js';

export default class Canvas {
    constructor(element) {
        this.element = element;
        this.context = this.element.getContext("2d");

        this.width = this.element.offsetWidth;
        this.height = this.element.offsetHeight;

        this.element.width = this.width;
        this.element.height = this.height;
    }

    setStep(size) {
        this.stepX = this.width / size.width;
        this.stepY = this.height / size.height;
    }

    async display(element) {
        switch (element.constructor.name) {
            case "Square":
                this.displaySquare(element);
        }
    }

    displaySquare(square) {
        if (square.tile == "BUSH") {
            this.draw(Tiles.get("tiles2", "GRASS"), { x: square.x, y: square.y });
        }
        this.draw(Tiles.get("tiles2", square.tile), { x: square.x, y: square.y });
        if (square.tile == "TREE") {
            this.draw(Tiles.get("tiles2", "UPTREE"), { x: square.x, y: square.y - 1 });
        }
    }

    draw(image, position) {
        this.context.drawImage(image,
            0,
            0,
            image.width,
            image.height,
            position.x * this.stepX,
            position.y * this.stepY,
            this.stepX,
            this.stepY)
    }
}