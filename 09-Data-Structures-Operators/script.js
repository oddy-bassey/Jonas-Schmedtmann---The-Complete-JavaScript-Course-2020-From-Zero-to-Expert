'use strict';

// Enhanced object literals

const players = [
  [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
  ],
  [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
  ],
];

const teams = ['team1', 'team2'];

const game = {
  [teams[0]]: 'Bayern Munich', // computing property names using destructuring
  [`team${1 + 1}`]: 'Borrussia Dortmund', // computing property names using string combination and math operations
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  players, // defining object property using variable
  odds: { team1: 1.33, x: 3.25, team2: 6.5 },

  //defining object funtion using simple method declaration pattern
  teamInfo() {
    console.log(`we have ${this.team1} & ${this.team2} present!`);
  },
};
