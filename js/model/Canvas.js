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
        let result = await fetch(`/tiles/square.png`);
        let image = await createImageBitmap(await result.blob());
        this.context.drawImage(image,
            0,
            0,
            31,
            31,
            element.x * this.stepX,
            element.y * this.stepY,
            this.stepX,
            this.stepY)
    }
}