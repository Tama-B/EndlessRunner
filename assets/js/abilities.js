const dragon = document.querySelector('.dragon');
let isFlying = false;
const flyingSpeed = 10;
const gravity = 8;
const floorHeight = 75;
let maxHeight = 400;
export let currentHeight = floorHeight;
dragon.style.bottom = `${floorHeight}px`;

export const fly = () => {
    if (isFlying == false && currentHeight >= floorHeight) {
        currentHeight -= gravity;
        dragon.style.bottom = `${currentHeight}px`;
    } else if (isFlying == true && currentHeight <= maxHeight) {
        currentHeight += flyingSpeed;
        dragon.style.bottom = `${currentHeight}px`;
    }
}

document.addEventListener('keydown', () => { isFlying = true })
document.addEventListener('keyup', () => { isFlying = false })