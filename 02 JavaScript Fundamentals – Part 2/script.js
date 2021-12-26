'use strict';

const arr = [21, 32, , 43];
console.log(arr);

const [x, y, z] = arr;
console.log(x, y, x);

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

restraunt.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

/*
//destructuring arrays
let [cat1, , cat2] = restraunt.categories;
console.log(cat1, cat2);

//swapping during destructuring
[cat1, , cat2] = [cat2, , cat1];
console.log(cat1, cat2);

const [starterMeal, mainMeal] = restraunt.order(2, 0);
console.log(starterMeal, mainMeal);

//destructuring nested array
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;

console.log(i, j);

const [k, l, [m, n]] = nested;
console.log(k, l, m, n);

//deafault values
const [p = 1, q = 1, r = 1] = [9, 8]; //assigning default value
console.log(p, q, r);

//destructuring objects
const { name, openningHours, categories } = restraunt;
console.log(name, openningHours, categories);

const {
  name: restrauntName,
  openningHours: hours,
  categories: tags,
  menu = [], //assigning default value
} = restraunt;
console.log(restrauntName, hours, tags, menu);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 2, c: 14 };
({ a, b } = obj);

console.log(a, b);

// nested objects
const { fri } = hours;
console.log(fri);

const {
  fri: { open: o, close: c },
} = hours;
console.log(o, c); */
