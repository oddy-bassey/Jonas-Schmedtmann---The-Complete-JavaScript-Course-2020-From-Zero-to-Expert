'use strict'

const bookings = [];

const createBooking = function(flightNum, numPassengers=1, price=50*numPassengers){

    const booking = {
        flightNum,
        numPassengers,
        price
    }

    console.log(booking);
    bookings.push(booking);
}

createBooking('LH124', 34);
createBooking('LH126', 2);
createBooking('LH128', 6);

/* Note:
 * function parameters cannot be skipped.
 * so if u intend to skip a parameter inorder to allow its default value then 
 * a wa to achieve this is to pass an 'Undefined' value which is the same as
 * passing nothing.
*/

createBooking('LH128', undefined, 20);