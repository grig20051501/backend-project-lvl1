import readlineSync from 'readline-sync';

const generateFirst = () => Math.floor(Math.random() * 50 + 1);
const generateDifference = () => Math.floor(Math.random() * 10);
const generateArray = (first, diff) => {
  const arr = [first];
  for (let i = 1; i < 10; i += 1) {
    arr[i] = arr[i - 1] + diff;
  }
  return arr;
};
const game = (name) => {
  let isWrong = false;
  for (let i = 0; i < 3; i += 1) {
    console.log('What number is missing in the progression?');
    const first = generateFirst();
    const diff = generateDifference();
    const arr = generateArray(first, diff);
    const missedIndex = generateDifference();
    const missedNum = arr[missedIndex];
    arr[missedIndex] = '..';
    console.log(`Question: ${arr}`);
    const answer = readlineSync.question('Your answer : ');
    if (parseInt(answer, 10) !== missedNum) {
      console.log(`'${answer}' is wrong answer ;(. Correcr answer was ${missedNum}`);
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
