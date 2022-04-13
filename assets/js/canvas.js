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

let x = 0;
let x2 = 1000;

export const animate = () => {
    ctx.drawImage(backgroundLayer1, 0, 0);
    ctx.drawImage(backgroundLayer2, 0, 0);
    ctx.drawImage(backgroundLayer3, 0, 0);
    ctx.drawImage(backgroundLayer4, 0, 0);
    ctx.drawImage(backgroundLayer5, 0, 0);
    requestAnimationFrame(animate);
    if (isGameStarted == false) return
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(backgroundLayer1, x, 0);
    ctx.drawImage(backgroundLayer1, x2, 0);
    ctx.drawImage(backgroundLayer2, x, 0);
    ctx.drawImage(backgroundLayer2, x2, 0);
    ctx.drawImage(backgroundLayer3, x, 0);
    ctx.drawImage(backgroundLayer3, x2, 0);
    ctx.drawImage(backgroundLayer4, x, 0);
    ctx.drawImage(backgroundLayer4, x2, 0);
    ctx.drawImage(backgroundLayer5, x, 0);
    ctx.drawImage(backgroundLayer5, x2, 0);
    if (x < -1000) x = 1000 + x2 - gameSpeed;
    x -= gameSpeed;
    if (x2 < -1000) x2 = 1000 + x - gameSpeed;
    x2 -= gameSpeed;
};
