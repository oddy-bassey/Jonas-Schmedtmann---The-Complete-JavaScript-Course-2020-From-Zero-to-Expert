
//Objects

//Dot vs Bracket notation
const oddy = {
     fristname: 'Oddy',
     lastname: 'Bassey',
     age: 2021-1996,
     job: 'CEO Revoltcode',
     friends: ['Twin', 'Andrew', 'Gabriel', 'Mitchanki']
};

const value = prompt('what do u want to know about revoltcode owner(firstname, lastname, friends, age');

if(oddy[value]){
     console.log(oddy[value]);
}else{
     const data = prompt(`provide this information(${value}) about the CEO if you have any idea!`)
     oddy[value] = data;
     console.log('revoltcode thanks u :)!');
}

//adding new properties to the object using the Dot & Bracket notation
oddy.location = 'Denmark';
oddy['girlfriend'] = 'Uyime';
console.log(oddy);
console.log(`${oddy.fristname} has ${oddy.friends.length} friends, and his best friend is ${oddy.friends[1]}`);