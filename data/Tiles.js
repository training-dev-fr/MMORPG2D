export default class Tiles {
    static get(file, name) {
        return game.tileManager.listFile[file].listItem[this[name]];
    }
}

Tiles.GRASS = 0;
Tiles.GROUND = 1;
Tiles.TREE = 2;
Tiles.UPTREE = 3;
Tiles.BUSH = 4;