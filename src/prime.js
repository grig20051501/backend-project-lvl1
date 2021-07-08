import readlineSync from 'readline-sync';

const generateNumber = () => Math.floor(Math.random() * 30 + 1);
const isPrime = (num) => {
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const game = (name) => {
  let isWrong = false;
  console.log('Answer "yes" if the number is prime. Otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    const number = generateNumber();
    console.log(`Question :${number}`);
    const answer = readlineSync.question('Answer : ');
    if (isPrime(number) !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isPrime(number)}'`);
      isWrong = true;
      break;
    } else {
      console.log('Correct!');
    }
  }
  if (isWrong) {
    console.log(`Let's try again, ${name}`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};
export default game;
