import { fly } from "./abilities.js";
import { handleObstacles } from "./obstacles.js";


const gameloop = () => {
    fly()
    handleObstacles();
}

let intervalId = setInterval(() => {
    gameloop()
}, 20)






