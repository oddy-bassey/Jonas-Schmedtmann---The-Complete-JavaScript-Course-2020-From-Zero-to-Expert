'use strict'

/* 
 * Closures : This is a closed-over varriable environment of the execution context
 * in which a function was created even after the execution context is gone.
 * 
 */

let f;

const secureBooking = function() {
    let value = 20;
    let val2 = 438;

    f = function() {
        console.log(value*2+" "+val2);
    }
}
secureBooking();

console.log("Eexcuted!!");
console.dir(f);

const boardPassengers = function(n, wait) {
    const perGroup = n / 3;

    setTimeout(() => console.log(`${n} passengers now boarding in groups of ${perGroup}`), wait*1000);
    console.log(`we'll start boarding in ${wait} seconds.`);
}

boardPassengers(9, 2)