export default class TileManager {
    constructor() {
        this.listFile = {};
    }

    async loadFile(folder, file, elementX, elementY) {
        let result = await fetch(`/tiles/${folder}/${file}.png`);
        this.listFile[file] = {
            full: await createImageBitmap(await result.blob()),
            listItem: []
        };
        let stepX = this.listFile[file].full.width / elementX;
        let stepY = this.listFile[file].full.height / elementY;
        for (let y = 0; y < elementY; y++) {
            for (let x = 0; x < elementX; x++) {
                this.listFile[file].listItem.push(await createImageBitmap(this.listFile[file].full, stepX * x, stepY * y, stepX, stepY));
            }
        }
    }
}