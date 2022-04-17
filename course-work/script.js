'use strict'

/*
 * NOTE: JavaScript do not support 'pass by reference', it only supports 'pass 
 * by value'. Although objects here seems to be passed by reference, actually
 * we're only passing the object reference but not actually 'passing by reference'.
*/

const flightNum = 'LH254';

const jonas = {
    name : 'Jonas Schemdtman',
    passport : 2345678989
}

const checkIn = function(flight, passenger){
    flight = 'LH999';
    passenger.name = 'Mr. '+passenger.name;

    if(passenger.passport === 2345678989){
        alert('Check in');
    }else{
        alert('Wrong passport!');
    }
}

checkIn(flightNum, jonas);
console.log(flightNum);
console.log(jonas);

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 100000000000)
}

newPassport(jonas);
checkIn(flightNum, jonas);