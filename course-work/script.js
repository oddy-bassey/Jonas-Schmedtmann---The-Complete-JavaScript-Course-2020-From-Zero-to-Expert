'use strict'

/*
 * NOTE: 
 * 
 * First Class Functions: this is simply a concept that functions are
 * values or other object types'
 * 
 * Higher Order Functions: these are functions that receive as parameter
 * a function or returns a funtion
*/

/*
const greet = function(greeting){
    return function(name){
        console.log(`${greeting} 😉 ${name}`);
    }
}*/

// re-writing the above function (greet) using arrow functions
const greet = (greeting) => {
    return (name) => {
        console.log(`${greeting} 😉 ${name}`);
    }
}

const greeter = greet('Hey');
greeter('Oddy');
greeter('Etap');
greeter('Danny');

greet('Hello') ('Banky');