import { fly } from "./abilities.js";
import { handleObstacles, startObstacleLoop, stopObstacleSpawning, clearObstacles } from "./obstacles.js";

const gameContainer = document.querySelector('.game_container');
const body = document.querySelector('body');
const startBtn = document.querySelector('.start_btn');
const overlay = document.querySelector('.overlay');
let intervalId

const gameloop = () => {
    fly()
    handleObstacles();
}

const startGameLoop = () => {
    intervalId = setInterval(() => {
        gameloop()
    }, 20)
}

const startGame = () => {
    clearObstacles();
    startGameLoop();
    startObstacleLoop();
    console.log('Game started');
    overlay.classList.add('hidden');
    startBtn.disabled = true;

}

startBtn.addEventListener('click', startGame);

const stopGameLoop = () => {
    clearInterval(intervalId);
    console.log('You failed!');
}

export const endGame = () => {
    stopGameLoop();
    stopObstacleSpawning();
    overlay.classList.remove('hidden');
    startBtn.disabled = false;
    let text = startBtn.textContent;
    startBtn.textContent = 'Play Again';
}









