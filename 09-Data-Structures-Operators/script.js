'use strict';

// Sets

const ordersSet = new Set([
  'pasta',
  'pitza',
  'resoto',
  'pasta',
  'pitza',
  'resoto',
]);

console.log(ordersSet);
console.log(new Set('Jonas'));
console.log(ordersSet.size); // set size
console.log(ordersSet.has('pitza')); // checking if set has||contains a value
console.log(ordersSet.add('rice')); // adding to a set
console.log(ordersSet.delete('resoto')); // deleting from a set

const staff = ['waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Manager'];
const uniqueStaff = new Set(staff); // creating a set of unique staffs
const staffs = [...new Set(staff)]; // creating an array of unique staffs
console.log(uniqueStaff, staffs);

console.log(new Set('Jonasschmedtmann').size);
