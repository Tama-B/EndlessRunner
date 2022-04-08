import { fly } from "./abilities.js";


const gameloop = () => {
    fly()
}

let intervalId = setInterval(() => {
    gameloop()
}, 20)




