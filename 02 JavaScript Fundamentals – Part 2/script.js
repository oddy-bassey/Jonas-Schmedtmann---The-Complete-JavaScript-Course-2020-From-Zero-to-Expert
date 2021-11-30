
//literal syntax for creating an array
const friends = ['Michael', 'Steven', 'Peter'];

const years = new Array(1921, 1922, 1923, 1924);

console.log(friends[2]);

console.log(friends.length);

console.log(friends[friends.length-1])

const myArray = ['david', 2012, years];

console.log(myArray);

// Excercise
const calAge = function(birthYear){
     return 2021-birthYear;
}

console.log(calAge(years[0]));

console.log(years.shift());

console.log(years);

console.log(friends.includes('Steven'));