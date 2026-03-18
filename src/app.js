/*
* File: app.js
* Author: Szász Benedek
* Copyright: 2026, Szász Benedek
* Group: Szoft I N
* Date: 2026-03-18
* Github: https://github.com/BenedekSzasz/
* Licenc: MIT
*/


import {calcPerimeter, calcArea} from './rhombus.js'



const rhombusForm = document.querySelector('#rhombusForm');
const sideInput = document.querySelector('#side');
const angleInput = document.querySelector('#alpha-angle');
const perimeterInput = document.querySelector('#perimeter');
const areaInput = document.querySelector('#area');

rhombusForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    console.log("Számít...")
    startCalc();
})


function startCalc(){
    const side = Number(sideInput.value);
    const angle = Number(angleInput.value);
    console.log(side, angle)

    const perimeter = calcPerimeter(side);
    const area = calcArea(side, angle);

    areaInput.value = area;
    perimeterInput.value = perimeter;
}

