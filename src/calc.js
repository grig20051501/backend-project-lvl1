import readlineSync from 'readline-sync';

const generateNumber = (num) => Math.floor(Math.random() * num);
// eslint-disable-next-line consistent-return
const correctAnswer = (numb1, numb2, expression) => {
  if (expression === '+') {
    return numb1 + numb2;
  }
  if (expression === '-') {
    return numb1 - numb2;
  }
  if (expression === '*') {
    return numb1 * numb2;
  }
};
const game = (name) => {
  console.log('What is the result of the expression?');
  let flag = false;
  for (let i = 0; i < 3; i += 1) {
    let expression;
    if (generateNumber(2) === 0) {
      expression = '+';
    }
    if (generateNumber(2) === 1) {
      expression = '-';
    } else {
      expression = '*';
    }
    const numb1 = generateNumber(20);
    const numb2 = generateNumber(20);
    console.log(`Question : ${numb1} ${expression} ${numb2}`);
    const answer = readlineSync.question('Answer :');
    if (answer != correctAnswer(numb1, numb2, expression)) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer(numb1, numb2, expression)}`);
      flag = true;
      break;
    } else {
      console.log('Correct!');
    }
  }
  if (flag) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};
export default game;
