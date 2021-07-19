import Tiles from '/data/Tiles.js';

export default class Canvas {
    constructor(element) {
        if (element == undefined) {
            this.element = document.createElement("canvas");
            document.querySelector("#console").appendChild(this.element);
        } else {
            this.element = element;
        }
        this.element.classList.add("canvas");

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



    draw(file, tile, position) {
        let image = Tiles.get(file, tile);
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

    drawPixel(file, tile, pixel) {
        let image = Tiles.get(file, tile);
        this.context.drawImage(image,
            0,
            0,
            image.width,
            image.height,
            pixel.x,
            pixel.y,
            this.stepX,
            this.stepY)
    }

    clear() {
        this.context.clearRect(0, 0, this.element.width, this.element.height);
    }
}