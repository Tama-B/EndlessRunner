import { currentHeight, flyingPower } from "./abilities.js";
import { isGameStarted } from "./main.js";

const flyingPowerBar = document.querySelector('.flying_power');
const rightFoot = document.querySelector('.dragon_foot_right');
const leftFoot = document.querySelector('.dragon_foot_left');
const wing = document.querySelector('.dragon_wing');


export const setAnimations = () => {
    if (currentHeight <= 75 && isGameStarted == true) {
        wing.classList.remove('drg_wng_flng');
        rightFoot.classList.add('rght_ft_rnng');
        leftFoot.classList.add('lft_ft_rnng');

    } else if (currentHeight >= 76 && isGameStarted == true) {
        wing.classList.add('drg_wng_flng');
        rightFoot.classList.remove('rght_ft_rnng');
        leftFoot.classList.remove('lft_ft_rnng');
    } else {
        rightFoot.classList.remove('rght_ft_rnng');
        leftFoot.classList.remove('lft_ft_rnng');
        wing.classList.remove('drg_wng_flng');
    }
}

export const changeFlyingPowerBar = () => {
    flyingPowerBar.style.width = `${flyingPower}px`;

}

