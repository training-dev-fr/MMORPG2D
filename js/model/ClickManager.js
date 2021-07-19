import Canvas from "./Canvas.js";

export default class ClickManager {
    constructor(size) {
        this.canvas = new Canvas();
        this.canvas.setStep(size);
        this.canvas.element.classList.add("top");

        this.canvas.element.addEventListener("click", (e) => {
            this.click(e);
        });

        this.canvas.element.addEventListener("contextmenu", (e) => {
            this.rightclick(e);
        });
    }

    click(e) {
        game.map.click(this.getClickPosition(e));
    }

    rightclick(e) {
        game.map.rightclick(this.getClickPosition(e));
    }

    getClickPosition(e) {
        return {
            x: Math.floor(e.layerX / this.canvas.stepX),
            y: Math.floor(e.layerY / this.canvas.stepY)
        }
    }
}