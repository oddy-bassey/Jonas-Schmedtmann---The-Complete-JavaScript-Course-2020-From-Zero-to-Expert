'use strict';

// Map

// NOTE: The data type of the keys is important
const rest = new Map();
rest.set('name', 'Classico Italino');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Oraganic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('open'));
console.log(rest.get('close'));

const time = 21;
console.log(rest.get(time > rest.get('open' && time < rest.get('closed'))));

console.log(rest.has('categories'));
console.log(rest.delete(true));

rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');

console.log(rest.get(arr));
console.log(rest.set(document.querySelector('h1'), 'Heading'));
console.log(rest);
console.log(rest.size);
