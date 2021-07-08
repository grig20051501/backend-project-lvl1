import readlineSync from 'readline-sync';

const generate = () => Math.floor(Math.random() * 10 + 1);
const correctAnswer = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  } return 'no';
};
const game = (name) => {
  let isWrong = false;
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    const num = generate();
    console.log(`Question :${num}`);
    const answer = readlineSync.question('Your answer : ');
    if (answer !== correctAnswer(num)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(num)}'`);
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
