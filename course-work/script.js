'use strict'

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('A310'[2]);

console.log(airline.length);
console.log(plane.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat){
    // B and E are middle seats
    const s = seat.slice(-1);
    if(s === 'B' || s === 'E')
        console.log('You got the middle seat');
    else
        console.log('You got lucky');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const fixName = function(name){
    const lowercaseName = name.toLowerCase();
    const correctName = lowercaseName[0].toUpperCase() + lowercaseName.slice(1);

    return correctName;
}

const passenger = fixName('jOnAs');
console.log(passenger);

// Comparing Emails
const compareEmail = function(correctEmail, email){
    const normalizedEmail = email.toLowerCase().trim();

    console.log(normalizedEmail);
    return email === correctEmail;
}

const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

compareEmail(email, loginEmail);

// replacing parts of strings
const priceGB = '288,97E';
const priceUS = priceGB.replace('E', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
//console.log(announcement.replace('door', 'gate')); // replaces only the first occurence of the word to be replaced
//console.log(announcement.replace(/door/g, 'gate')); // replaces all the occurences of the word to be replaced
console.log(announcement.replaceAll('door', 'gate')); // replaces all the occurences of the word to be replaced

// Booleans
const airBusPlane = 'A320neo';
console.log(airBusPlane.includes('A320'));
console.log(airBusPlane.includes('Boeng'));
console.log(airBusPlane.startsWith('Airb'));
console.log(airBusPlane.endsWith('neo'));

// splitting strings
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
const newName = ['Mr', fixName(firstName), fixName(lastName)].join(' ');
console.log(newName);

const capitalizeName = function(name){
    const names = name.split(' ');
    const uppercaseNames = [];
    
    for(const n of names){
        uppercaseNames.push(n[0].toUpperCase() + n.slice(1));
    }

    return uppercaseNames.join(' ');
}

console.log(capitalizeName('jessica ann smith davies'));
console.log(capitalizeName('jonas schmedtmann')); 

// padding
console.log('Go to gate 23!'.padStart(20, '+').padEnd(25, '#'));
console.log('Jonas'.padStart(15, '-').padEnd(20,'*'));

// example: masking a cedit card string
const maskCreditCard = function(number){
    const str = String(number);

    return str.slice(-4).padStart(16, '*');
}

console.log(maskCreditCard(1234567898765432));
console.log(maskCreditCard(1294839898764098));

// repeat
console.log('Success ahead!\n'.repeat(3));