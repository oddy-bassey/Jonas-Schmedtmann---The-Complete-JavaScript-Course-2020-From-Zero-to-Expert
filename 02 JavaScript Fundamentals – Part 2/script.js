//LOOPS

for (let i = 1; i <= 10; i++) {
  //console.log(`running ${i} times!`)
}

// continue and break stateents

//continue: it exists the current iteration of  the loop and moves to the next iteration
// break: exists from the loop entirely

for (let i = 1; i <= 10; i++) {
  //if(i===5) continue;

  if (i === 5) break;
  console.log(`running ${i} times!`);
}

let iteration = 1;

//WHILE LOOP
// while (iteration <= 10){
//      console.log(`while loop executing ${iteration} times!`)

//      iteration++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`dice ${dice}`);

  dice = Math.trunc(Math.random() * 6) + 1;
}
const data = (name) => '' + name;
