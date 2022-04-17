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

const oneWord = function(word){
    return word.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(word){
    const [first, ...others] = word.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher-order function
const transformer = function(word, fn){
    console.log(word);
    console.log(`Transformed string: ${fn(word)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);

// JS uses call-backs all the time
const high5 = function(word='hello'){
    console.log(word+' 👋');
}
document.body.addEventListener('click', high5);
['jonas', 'Martha', 'Adam'].forEach(high5);