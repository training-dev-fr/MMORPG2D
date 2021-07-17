export default class Tiles {
    static get(file, tile) {
        return game.tileManager.listFile[file].listItem[this[tile.namespace][tile.key]];
    }
}

Tiles.MAP = {};
Tiles.MAP.GRASS = 0;
Tiles.MAP.GROUND = 1;
Tiles.MAP.TREE = 2;
Tiles.MAP.UPTREE = 3;
Tiles.MAP.BUSH = 4;
Tiles.MAP.MARK = 5;

Tiles.CHAR = {};
Tiles.CHAR.BOTTOM0 = 0;
Tiles.CHAR.BOTTOM1 = 1;
Tiles.CHAR.BOTTOM2 = 2;
Tiles.CHAR.BOTTOM3 = 3;
Tiles.CHAR.LEFT0 = 4;
Tiles.CHAR.LEFT1 = 5;
Tiles.CHAR.LEFT2 = 6;
Tiles.CHAR.LEFT3 = 7;
Tiles.CHAR.RIGHT0 = 8;
Tiles.CHAR.RIGHT1 = 9;
Tiles.CHAR.RIGHT2 = 10;
Tiles.CHAR.RIGHT3 = 11;
Tiles.CHAR.TOP0 = 12;
Tiles.CHAR.TOP1 = 13;
Tiles.CHAR.TOP2 = 14;
Tiles.CHAR.TOP3 = 15;