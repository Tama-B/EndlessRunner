import { fly, resetFlyingPower } from "./abilities.js";
import { handleObstacles, startObstacleLoop, stopObstacleSpawning, clearObstacles } from "./obstacles.js";
import { setAnimations, changeFlyingPowerBar } from "./animation.js";

const gameContainer = document.querySelector('.game_container');
const body = document.querySelector('body');
const startBtn = document.querySelector('.start_btn');
const overlay = document.querySelector('.overlay');
const timerDisplay = document.querySelector('.timer_display');
let intervalId
export let isGameStarted = false;

let interval
let elapsedTime

const startStopWatch = () => {
    const startTime = new Date();
    interval = setInterval(() => {
        let currentTime = new Date();
        elapsedTime = new Date(currentTime - startTime);
        timerDisplay.textContent = elapsedTime.toLocaleTimeString().slice(3);
    }, 1000)
}


const stopStopWatch = () => {
    clearInterval(interval);
}

const gameloop = () => {
    fly()
    handleObstacles();
    setAnimations();
    changeFlyingPowerBar();
}

const startGameLoop = () => {
    intervalId = setInterval(() => {
        gameloop()
    }, 20)
}

const startGame = () => {
    isGameStarted = true;
    resetFlyingPower();
    clearObstacles();
    startGameLoop();
    startObstacleLoop();
    startStopWatch();
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
    isGameStarted = false;
    stopGameLoop();
    stopObstacleSpawning();
    stopStopWatch();
    overlay.classList.remove('hidden');
    startBtn.disabled = false;
    let text = startBtn.textContent;
    startBtn.textContent = 'Play Again';
}











