'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thurs: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order(startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
};

// object properties || keys
const properties = Object.keys(restaurant.openingHours);

let openStr = `we are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

// property values
const values = Object.values(restaurant.openingHours);
console.log(values);

// entire object || entries
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

// [key, value]
for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}
