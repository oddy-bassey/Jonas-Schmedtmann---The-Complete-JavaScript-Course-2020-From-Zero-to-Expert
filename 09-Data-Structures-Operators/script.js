'use strict';

// Map

const question = new Map([
  ['Question', 'what is the best programing language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['Correct', 2],
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

// looping through a map
console.log(question.get('Question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key} : ${value}`);
  }
}

const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('C orrect') === answer));

// converting a map back to an Array
console.log([...question]);
//console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
