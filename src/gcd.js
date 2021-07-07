/* eslint-disable eqeqeq */
import readlineSync from 'readline-sync';

const generateNumber = () => Math.floor(Math.random() * 30 + 1);
const gcd = (numb1, numb2) => {
  let first = numb1;
  let second = numb2;
  while (first !== second) {
    if (first > second) {
      first -= second;
    } else {
      second -= first;
    }
  }
  return first;
};
const game = (name) => {
  let isWrong = false;
  console.log('Find the greatest common divisor of given numbers');
  for (let i = 0; i < 3; i += 1) {
    const numb1 = generateNumber();
    const numb2 = generateNumber();
    console.log(`Question : ${numb1} ${numb2}`);
    const answer = readlineSync.question('Answer : ');
    if (answer != gcd(numb1, numb2)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gcd(numb1, numb2)}'`);
      isWrong = true;
      break;
    } else {
      console.log('Correct!');
    }
  }
  if (isWrong) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

export default game;
