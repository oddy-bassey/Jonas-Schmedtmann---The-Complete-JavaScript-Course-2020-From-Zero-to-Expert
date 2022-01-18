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

// Optional chaining operator

// on Parameters
console.log(restaurant.openingHours?.sun);
console.log(restaurant.openingHours.sun?.open);

const days = ['mon', 'teus', 'wed', 'thurs', 'fri', 'sat'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// on Methods
console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
console.log(restaurant.orderPie?.(0, 1) ?? 'method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'user does not exist');
console.log(users[1]?.name ?? 'user does not exist');
