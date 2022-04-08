const gameContainer = document.querySelector('game_container');


const spawnObstacle = () => {
    let obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    gameContainer.appendChild(obstacle);

}

spawnObstacle()

const moveObstacles = () => {

}