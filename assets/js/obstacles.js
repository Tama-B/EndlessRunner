import { currentHeight } from "./abilities.js";
import { endGame } from "./main.js";
import { gameSpeed } from "./canvas.js";

const gameContainer = document.querySelector('.game_container');

const obstacleStartPosition = 1040;
const obstacleDespawnPosition = -100;
const obstacleSpeed = gameSpeed;
let intervalId

//Create random number for obstacle height, width etc.
const randomNumberBetween = (min, max) => {
    return Math.random() * (max - min) + min;
}

//Create random color for obstacles
const randomColor = () => {
    let hexCode = Math.floor(Math.random() * 16777215).toString(16);
    return `#${hexCode}`

}

//Class for Obstacles
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


//Create Obstacles and add them to DOM
// export const startObstacleLoop = () => {
//     intervalId = setInterval(() => {
//         randomObstacleNumber = randomNumberBetween(2000, 4000);
//         const obs = new Obstacle(randomNumberBetween(100, 300), randomNumberBetween(40, 100), randomColor());
//         const htmlElement = obs.spawn();
//         let obstacleElementAndObject = [htmlElement, obs];
//         spawnedObstacles.push(obstacleElementAndObject);
//     }, 4000);

// }

export const startObstacleLoop = () => {
    intervalId = setTimeout(() => {
        randomObstacleNumber = randomNumberBetween(2000, 4000);
        const obs = new Obstacle(randomNumberBetween(100, 300), randomNumberBetween(40, 100), 'blue');
        const htmlElement = obs.spawn();
        let obstacleElementAndObject = [htmlElement, obs];
        spawnedObstacles.push(obstacleElementAndObject);
        startObstacleLoop();
    }, randomNumberBetween(2000, 5000));

}


//Stop spawning obstacles when game is over
export const stopObstacleSpawning = () => {
    clearInterval(intervalId);
}

//Despawn obstacle when it leaves game container
const despawnObstacles = () => {
    spawnedObstacles.forEach(element => {
        if (element[1].currentPosition <= obstacleDespawnPosition) {
            element[0].remove();
            spawnedObstacles.shift();
        }
    });
}

export const clearObstacles = () => {
    spawnedObstacles.forEach(element => {
        element[0].remove();
    });
    spawnedObstacles.length = 0;
}

//Move obstacles from right to left
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
            endGame();
        }
    });

}