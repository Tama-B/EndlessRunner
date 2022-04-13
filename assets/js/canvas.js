import { isGameStarted } from "./main.js";

const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1000;
const CANVAS_HEIGHT = canvas.height = 500;
export let gameSpeed = 2.5;

const backgroundLayer1 = new Image();
backgroundLayer1.src = 'assets/img/layer-1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'assets/img/layer-2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'assets/img/layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'assets/img/layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'assets/img/layer-5.png';

class Layer {
    constructor(image, speedModifier) {
        this.x = 0;
        this.y = 0;
        this.width = 1000;
        this.height = 500;
        this.x2 = this.width;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    update() {

        if (this.x <= -this.width) {
            this.x = this.width + this.x2 - this.speed;
        }
        if (this.x2 <= -this.width) {
            this.x2 = this.width + this.x - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
}

const layer1 = new Layer(backgroundLayer1, 0.2);
const layer2 = new Layer(backgroundLayer2, 0.4);
const layer3 = new Layer(backgroundLayer3, 0.6);
const layer4 = new Layer(backgroundLayer4, 1);
const layer5 = new Layer(backgroundLayer5, 0.8);

const gameObjects = [layer1, layer2, layer3, layer4, layer5];

export const animate = () => {
    gameObjects.forEach(object => {
        object.draw();
    });
    requestAnimationFrame(animate);
    if (isGameStarted == false) return
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    gameObjects.forEach(object => {
        object.update();
        object.draw();
    })

};

