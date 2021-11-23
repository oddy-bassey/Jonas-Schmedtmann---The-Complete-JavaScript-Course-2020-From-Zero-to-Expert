'use strict';

const age1 = calcAge1(1982, 2021); 

//function declaration
function calcAge1(birthYear, currentYear){

     return currentYear-birthYear;
}

//function expression
const calcAge2 = function(birthYear, currentYear){

     return currentYear-birthYear;
}
const age2 = calcAge2(1978, 2021);

console.log(age1, age2);