'use strict';

// Map

const question = new Map([
  ['Question', 'what is the best programing language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['Correct', 3],
  [true, 'Correct'],
  [false, 'Try Again'],
]);
console.log(question);

// converting objects to Maps
const person = {
  name: 'Jonas',
  age: 31,
  profession: 'Software Developer',
};

const personMap = new Map(Object.entries(person));
console.log(personMap);
