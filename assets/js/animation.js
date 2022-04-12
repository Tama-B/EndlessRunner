import { currentHeight } from "./abilities.js";

const rightFoot = document.querySelector('.dragon_foot_right');
const leftFoot = document.querySelector('.dragon_foot_left');


export const setAnimations = () => {
    if (currentHeight <= 75) {
        rightFoot.classList.add('rght_ft_rnng');
        leftFoot.classList.add('lft_ft_rnng');
    } else {
        rightFoot.classList.remove('rght_ft_rnng');
        leftFoot.classList.remove('lft_ft_rnng');
    }
}