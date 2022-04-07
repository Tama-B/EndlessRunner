const horse = document.querySelector('.horse');
let horseBottom = 200;
let isJumping = false;
const initialJumpSpeed = 6;
let jumpSpeed = initialJumpSpeed;
const gravity = 0.4;



const jump = () => {
    if (isJumping == true && horseBottom >= 200) {
        horseBottom += jumpSpeed;
        jumpSpeed -= gravity;
        horse.style.bottom = `${horseBottom}px`
    }
    if (horseBottom <= 200) {
        isJumping = false;
        jumpSpeed = initialJumpSpeed;
        horseBottom = 200;
    }
}


const gameloop = () => {
    jump();
}

let intervalId = setInterval(gameloop, 20);

document.addEventListener('keydown', () => {
    isJumping = true;
})

