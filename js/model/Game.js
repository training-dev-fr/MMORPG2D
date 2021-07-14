import Map from './Map.js';
import Canvas from './Canvas.js';

export default class Game {
    constructor() {
        this.canvas = new Canvas(document.querySelector("#static-canvas"));
    }

    async init() {
        this.map = new Map();
        await this.map.loadMap("map1");
        this.canvas.setStep(this.map.size);
        this.map.display();
    }

    display(element) {
        switch (element.constructor.name) {
            case "Square":
                this.canvas.display(element);
        }
    }
}