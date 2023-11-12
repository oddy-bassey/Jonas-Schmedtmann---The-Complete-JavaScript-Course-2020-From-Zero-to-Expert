'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
 * Array Methods
 *
 */
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE - does not modify the original array
console.log("SLICE METHOD")
console.log(arr.slice(2)); // array from index 2
console.log(arr.slice(2, 4)); // array from index 2 exclude from index 4
console.log(arr.slice(-2)); // array from the second to the last index
console.log(arr.slice(-1)); // array from the last index
console.log(arr.slice(1, -2)); // array from the first index exclude from second to the last index
console.log(arr.slice()); // returns all elements of the array
console.log([...arr]); // spreads the array or creates a shallow copy of the array

// SPLICE - modifies the original array
console.log("SPLICE METHOD")
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE METHOD - mutates the original array
console.log("REVERSE METHOD")
arr = ['j', 'i', 'h', 'g', 'f'];
let arr2 = arr.reverse();
console.log(arr2);

// CONCAT 
console.log("CONCAT mETHOD")
let arr1 = ['a', 'b', 'c', 'd', 'e'];
const letters = arr1.concat(arr2);
console.log(letters);
console.log([...arr1, ...arr2]);

// JOIN
console.log("JOIN METHOD")
console.log(letters.join('-'));

/* Looping through an array using For-Each
 * Note: For-each loop does not support loop breakout
 */
console.log("For of Loop")
for(const movement of movements) {
  if(movement > 0){
    console.log(`you deposited ${movement}`);
  } else{
    console.log(`you withdrew ${movement}`);
  }
}

// accessing the index in for-of loop
console.log("For of Loop, accessing the array index")
for(const [index, movement] of movements.entries()) {
  if(movement > 0){
    console.log(`at movement ${index+1} you deposited ${movement}`);
  } else{
    console.log(`at movement ${index+1} you withdrew ${movement}`);
  }
}

console.log("For Each Loop")
movements.forEach(function(movement) {
  if(movement > 0){
    console.log(`you deposited ${movement}`);
  } else{
    console.log(`you withdrew ${movement}`);
  }
});

// accessing the index in for-each loop
console.log("For Each Loop, accessing the array index")
movements.forEach(function(movement, index, arrData) {
  if(movement > 0){
    console.log(`at movement ${index+1} you deposited ${movement}`);
  } else{
    console.log(`at movement ${index+1} you withdrew ${movement}`);
  }
});