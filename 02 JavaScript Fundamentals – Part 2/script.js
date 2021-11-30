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

//Arrow function

//single line Arrow function 
const age = birthYear => 2021 - birthYear;
console.log(age(1996));

//multipe line Arrow function 
const yearsUntilRetirement = (firstname, birthYear) => {

     const age = 2021-birthYear;
     const retirement = 65 - age;

     return `${firstname} retires in ${retirement}years`;
}
console.log(yearsUntilRetirement('Oddy', 1996));