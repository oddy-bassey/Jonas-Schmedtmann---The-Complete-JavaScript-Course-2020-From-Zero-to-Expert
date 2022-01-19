const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
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
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: { team1: 1.33, x: 3.25, team2: 6.5 },
};

// Question 1
for (const [goal, player] of game.scored.entries()) {
  console.log(`${player} goal ${goal + 1}`);
}

// Question 2
let totalOdd = 0;
const oddValues = Object.values(game.odds);
for (const odd of oddValues) {
  totalOdd += odd;
}
const averageOdd = totalOdd / oddValues.length;
console.log(`Average odd is ${averageOdd}`);

// Question 3
const oddEntries = Object.entries(game.odds);
for (const [team, odd] of oddEntries) {
  let clause = team === 'x' ? 'draw' : `${game[team]} victory`;
  console.log(`Odd of  ${clause} ${odd}`);
}

// Bonus question
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
