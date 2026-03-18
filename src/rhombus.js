/*
* File: rhombus.js
* Author: Szász Benedek
* Copyright: 2026, Szász Benedek
* Group: Szoft I N
* Date: 2026-03-18
* Github: https://github.com/BenedekSzasz/
* Licenc: MIT
*/


function calcPerimeter(side){
    return side * 4
}

function calcArea(side, angle){
    const rad = angle * Math.PI / 180
    return Math.pow(side, 2) * Math.sin(rad)
}

export {calcPerimeter, calcArea}