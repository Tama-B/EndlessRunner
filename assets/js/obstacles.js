import { currentHeight } from "./abilities.js";


const gameContainer = document.querySelector('.game_container');

const obstacleStartPosition = 1040;
let currentObstaclePosition = obstacleStartPosition;
const obstacleDespawnPosition = -40;
const obstacleSpeed = 5;
let isSpawned = false;



const spawnObstacle = () => {
    let obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    gameContainer.appendChild(obstacle);
    obstacle.style.left = `${obstacleStartPosition}px`;
    isSpawned = true;
}

const despawnObstacle = (obstacle) => {
    if (currentObstaclePosition <= obstacleDespawnPosition) {
        obstacle.remove();
        currentObstaclePosition = obstacleStartPosition;
        isSpawned = false;
    }
}

const moveObstacles = (obstacle) => {
    currentObstaclePosition -= obstacleSpeed;
    obstacle.style.left = `${currentObstaclePosition}px`
}

export const handleObstacles = () => {
    if (isSpawned == false) { spawnObstacle(); };
    if (isSpawned == true) {
        const obstacle = document.querySelector('.obstacle');
        moveObstacles(obstacle);
        despawnObstacle(obstacle);
        detectCollision();
    }
}

/////////////////////////Collision

const detectCollision = () => {
    if (currentObstaclePosition <= 260 &&
        currentHeight <= 160 &&
        currentObstaclePosition >= 120) {
        console.log('Collision!');
    }
}