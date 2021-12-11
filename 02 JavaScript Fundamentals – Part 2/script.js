//PROBLEM 1

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

function calcAmplitude(temperatures) {
  let maxValue = temperatures[0];
  let minValue = temperatures[0];

  for (let i = 0; i < temperatures.length; i++) {
    const currentTemp = temperatures[i];

    if (typeof currentTemp !== 'number') {
      continue;
    }

    if (maxValue < currentTemp) maxValue = currentTemp;
    if (minValue > currentTemp) minValue = currentTemp;
  }

  const amplitude = maxValue - minValue;

  return amplitude;
}

console.log(calcAmplitude(temperatures));

//PROBLEM 2

function calcAmplitudeNew(t1, t2) {
  const temperatures = t1.concat(t2);

  let maxValue = temperatures[0];
  let minValue = temperatures[0];

  for (let i = 0; i < temperatures.length; i++) {
    const currentTemp = temperatures[i];

    if (typeof currentTemp !== 'number') {
      continue;
    }

    if (maxValue < currentTemp) maxValue = currentTemp;
    if (minValue > currentTemp) minValue = currentTemp;
  }

  const amplitude = maxValue - minValue;

  return amplitude;
}

console.log(
  calcAmplitudeNew([12, 43, 43, 234, -5, '-32'], [3, 32, 65, 'stroh'])
);
