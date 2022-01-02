'use strict';

const restraunt = {
  name: 'African cousine',
  location: 'Akwa-Ibom',
  categories: ['ibibio', 'igbo', 'hausa', 'yoruba', 'efik '],
  startMenu: [
    'rice',
    'affang',
    'chinkafa',
    'akamu',
    'beans',
    'ogbono',
    'salad',
  ],
  mainMenu: ['jolof', 'moi moi', 'palm cake', 'wine'],
  openningHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (startIndex, mainIndex) {
    return [this.startMenu[startIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
    console.log(
      `${this.startMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

const arr = [3, 4, 5, 6];
const newArr = [2, 2, ...arr];

console.log(newArr);
console.log(...newArr);

const newMenu = [...restraunt.mainMenu, 'epkankukwo'];
console.log(newMenu);

// USES OF SPREAD OPERATOR

// copy array (shallow copy)
const mainMenuCopy = [...restraunt.mainMenu];

// merge arrays
const menu = [...restraunt.mainMenu, ...restraunt.startMenu];
console.log(mainMenuCopy, menu);

// Iterables: arrays, strings, maps, sets
const name = 'Oddy Bassey';
const letters = [...name];
console.log(letters);

// creating a shallow copy of the object
const restrauntCopy = { ...restraunt };
console.log(restrauntCopy);

// Rest pattern, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

const [pizza, risoto, ...otherFood] = [
  ...restraunt.mainMenu,
  ...restraunt.startMenu,
];

console.log(pizza, risoto, otherFood);

const { sat, ...weekDays } = restraunt.openningHours;
console.log(sat, weekDays);

const add = function (...numbers) {
  // (...numbers) -> rest parameter
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];

  console.log(`total sum ${sum}`);
};

const x = [3, 6, 7, 4, 7, 3, 54, 332];
add(...x);
