'use strict';

function logger(){
     console.log('My name is Oddy');
}

// calling | running | executing | invoking the function
logger();

function fruitProcessor(apples, oranges){
     
     console.log(`${apples} - ${oranges} \n`);
     const juice = `Juice created with ${apples} apples and ${oranges} oranges.`;
     return juice;
}

const appleJuice = fruitProcessor(5, 3);
console.log(appleJuice);