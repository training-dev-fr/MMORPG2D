import Grid from './Astar/Grid.js';
import Canvas from './Canvas.js';
import ClickManager from './ClickManager.js';
import Square from './Square.js';

export default class Map {
    constructor() {
        this.listSquare = Array();
        this.canvas = new Canvas();
    }

    async loadMap(file) {
        let result = await fetch(`/data/${file}.json`);
        let data = await result.json();
        Object.assign(this, data);
        this.canvas.setStep(this.size);
        this.clickManager = new ClickManager(this.size);
        /*for (let i = 0; i < this.listSquare.length; i++) {
            this.listSquare[i] = new Square(this.listSquare[i].x, this.listSquare[i].y, this.listSquare[i].tile);
        }*/
        for (let x = 0; x < this.size.width; x++) {
            for (let y = 0; y < this.size.height; y++) {
                this.listSquare.push(new Square(x, y));
            }
        }
        this.grid = new Grid(this.listSquare, this.size);
    }

    display() {
        for (let square of this.listSquare) {
            square.display(this.canvas);
        }
    }

    onclick(callback) {
        this.click = callback;
    }

    onrightclick(callback) {
        this.rightclick = callback;
    }

    getSquare(position) {
        return this.listSquare.find(square => square.position.x == position.x && square.position.y == position.y);
    }
}