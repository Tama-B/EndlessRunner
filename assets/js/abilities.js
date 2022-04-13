const dragon = document.querySelector('.dragon');
let isFlying = false;
const flyingSpeed = 10;
const gravity = 8;
const floorHeight = 64;
let maxHeight = 400;
export let currentHeight = floorHeight;
dragon.style.bottom = `${floorHeight}px`;
export let flyingPower

export const resetFlyingPower = () => {
    flyingPower = 200;
}

export const fly = () => {
    if (isFlying == false &&
        currentHeight >= floorHeight ||
        flyingPower == 0) {
        currentHeight -= gravity;
        if (currentHeight < floorHeight) currentHeight = floorHeight;
        dragon.style.bottom = `${currentHeight}px`;
    } else if (isFlying == true &&
        currentHeight <= maxHeight) {
        currentHeight += flyingSpeed;
        dragon.style.bottom = `${currentHeight}px`;
    }
}

const handleFlyingPower = () => {
    if (isFlying == false &&
        currentHeight <= floorHeight &&
        flyingPower <= 199) {
        flyingPower++;

    }
    else if (isFlying == true &&
        currentHeight >= floorHeight &&
        flyingPower >= 1) {
        flyingPower--;
    }
}

setInterval(() => {
    handleFlyingPower();
}, 20)



document.addEventListener('keydown', () => { isFlying = true })
document.addEventListener('keyup', () => { isFlying = false })