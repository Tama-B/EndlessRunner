import { fly } from "./abilities.js";
import { handleObstacles } from "./obstacles.js";

const gameloop = () => {
    fly()
    handleObstacles();
}

const startGameLoop = () => {
    let intervalId = setInterval(() => {
        gameloop()
    }, 20)
}

const startGame = () => {
    startGameLoop();
}







