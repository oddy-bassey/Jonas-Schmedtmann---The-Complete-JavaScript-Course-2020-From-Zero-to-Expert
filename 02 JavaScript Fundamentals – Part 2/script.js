'strict-mode';

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

// question 1
const [player1, player2] = game.players;

console.log(player1, player2);

// question 2
const [gk, ...fieldPlayers] = player1;

console.log(gk, fieldPlayers);

// question 3
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

// question 4
const player1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(player1Final);

// question 5
// const { odds: { team1, x: draw, team2 }} = game;
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// question 6
const printGoals = (...players) => {
  console.log(...players, `Gaols scored ${players.length}`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// question 7
team1 < team2 && console.log('Team1 is likely to win');
team1 > team2 && console.log('Team2 is likely to win');
