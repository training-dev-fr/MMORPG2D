import Map from './Map.js';
import Canvas from './Canvas.js';
import TileManager from './TileManager.js';

export default class Game {
    constructor() {
        this.canvas = new Canvas(document.querySelector("#static-canvas"));
    }

    async init() {
        this.tileManager = new TileManager();
        await this.tileManager.loadFile("tiles2", 5, 1);
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