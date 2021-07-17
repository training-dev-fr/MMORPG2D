import Map from './Map.js';
import TileManager from './TileManager.js';

export default class Game {
    constructor() {

    }

    async init() {
        this.tileManager = new TileManager();
        await this.tileManager.loadFile("map", "tiles", 6, 1);
        await this.tileManager.loadFile("character", "char1", 4, 4);
        await this.tileManager.loadFile("character", "char2", 4, 4);
        await this.tileManager.loadFile("character", "char3", 4, 4);

        this.map = new Map();
        await this.map.loadMap("map2");
        this.map.display();

        let path = this.map.grid.getPath(game.map.listSquare[0], game.map.listSquare[624]);
        for (let square of path) {
            square.displayPath(this.map.canvas);
            await new Promise(resolve => setTimeout(resolve, 100));
        }




        /*this.character = Array();

        let char1 = new Character("Mostuf", "Vampyre", 5, 5, "BOTTOM");
        char1.display();
        char1.animate();
        this.character.push(char1);


        let char2 = new Character("Jean", "Monk", 3, 1, "TOP");
        char2.display();
        char2.animate();
        this.character.push(char2);

        let char3 = new Character("Michel", "Man", 10, 6, "LEFT");
        char3.display();
        char3.animate();
        this.character.push(char3);*/

    }
}