'use strict'

const runOnce = function (){
    console.log("This will never run again!");
}
runOnce();

(function() {
    console.log("I execute only once!");
}) ();

(() => console.log("Just one runtime!!")) ();