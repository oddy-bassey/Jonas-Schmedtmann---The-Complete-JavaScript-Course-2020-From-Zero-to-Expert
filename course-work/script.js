'use strict'

const lufthansa = {
    airline : 'Lufthansa',
    iataCode : 'LH',
    bookings : [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight 
            ${this.iataCode}${flightNum}`);

        this.bookings.push({flight : `${this.iataCode}${flightNum}`, name});
    }
}

lufthansa.book(235, 'Jonas Schmedtmann');
lufthansa.book(567, 'Jonas Smith');
console.log(lufthansa);

const eurowings = {
    airline : "Eurowings",
    iataCode : 'EW',
    bookings: [],
};

const book = lufthansa.book;

// Does not work
// book(23, 'Sarah Williams')

/*
 * using call, apply & bind method to explicitly define the "this" keyword
 * in any function that we want
*/

// Call method
book.call(eurowings, 345, 'Sarah Williams')
console.log(eurowings);

book.call(lufthansa, 555, 'Abu Dhabi')
console.log(lufthansa);

const swiss = {
    airline : "Swiss Airlines",
    iataCode : 'LX',
    bookings: [],
}

book.call(swiss, 599, "Mary Swagger");
console.log(swiss);

// Apply method 
// this isn't used anymore in modern JS because there's a better way of doing the exact same thing (using call method)
const flightData = [577, "George copper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind method
/* NOTE: "bind" does not immediately call the function, instead it returns a new function where the "this" keyword is bound
 * It is set to whatever value we pass
*/

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");
bookLH(23, "Mark Hendry");
bookLX(23, "Judge Trump");

/* set in stone certain function arguements
 * Note: setting parts of the arguement before hand is also known as partial application
*/
const bookEW23 = book.bind(eurowings, 77);
bookEW23("Richard Crosbie");

// other situations where the bind method is used: with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);
    this.planes++;
    console.log(this.planes);
}

lufthansa.buyPlane();
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// other situations where the bind method is used: Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// or
const addVatTax = addTax.bind(null, 0.1);
console.log(addVatTax(220));

// challenge: write a function that returns a function like the addVatTax 
function addTaxRate(rate){
    return (value) => value + value * rate;
}

const addVat2 = addTaxRate(0.1);
console.log(addVat2(200));