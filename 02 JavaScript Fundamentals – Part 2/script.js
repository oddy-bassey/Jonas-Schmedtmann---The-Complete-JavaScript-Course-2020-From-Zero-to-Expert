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

// SHORT CIRCUITING

// OR operator: short circuits when the first value is true (returns the first truity value)
console.log(undefined || 'jonas');
console.log(undefined || 'jonas' || 0 || 1 || true);

const guest = restraunt.numGuests || 10;
console.log(guest);

// AND operator: short circuits when the first value is false (returns the first falsy value)
console.log(1 && 'jonas');
