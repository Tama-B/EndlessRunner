import { currentHeight } from "./abilities.js";

const gameContainer = document.querySelector('.game_container');

const obstacleStartPosition = 1040;

const obstacleDespawnPosition = -100;
const obstacleSpeed = 5;


const randomNumberBetween = (min, max) => {
    return Math.random() * (max - min) + min;
}

const randomColor = () => {
    let hexCode = Math.floor(Math.random() * 16777215).toString(16);
    return `#${hexCode}`

}


class Obstacle {
    constructor(height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;
    };
    currentPosition = obstacleStartPosition;
    spawn() {
        let element = document.createElement('div');
        element.classList.add('obstacle');
        element.style.height = `${this.height}px`;
        element.style.width = `${this.width}px`;
        element.style.backgroundColor = `${this.color}`;
        gameContainer.appendChild(element);
        element.style.left = `${obstacleStartPosition}px`;
        return element;
    }

}

let spawnedObstacles = [];
let randomObstacleNumber = 0;

setInterval(() => {
    randomObstacleNumber = randomNumberBetween(2000, 4000);
    const obs = new Obstacle(randomNumberBetween(100, 300), randomNumberBetween(40, 100), randomColor());
    const htmlElement = obs.spawn();
    let obstacleElementAndObject = [htmlElement, obs];
    spawnedObstacles.push(obstacleElementAndObject);
}, 4000);

const despawnObstacles = () => {
    spawnedObstacles.forEach(element => {
        if (element[1].currentPosition <= obstacleDespawnPosition) {
            element[0].remove();
            spawnedObstacles.shift();
        }

    });
}

const moveObstacles = () => {
    spawnedObstacles.forEach(element => {
        element[1].currentPosition -= obstacleSpeed;
        element[0].style.left = `${element[1].currentPosition}px`;
    });

}

export const handleObstacles = () => {
    moveObstacles();
    detectCollision();
    despawnObstacles();
}


/////////////////////////Collision

const detectCollision = () => {
    spawnedObstacles.forEach(element => {
        if (element[1].currentPosition <= 240 &&
            currentHeight - 50 <= element[1].height &&
            element[1].currentPosition + element[1].width >= 120) {
        }
    });

}