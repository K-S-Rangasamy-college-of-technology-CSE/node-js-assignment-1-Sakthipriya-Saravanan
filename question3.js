const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkOddOrEven(number) {
  if (number % 2 === 0) {
    return `${number} is an even number.`;
  } else {
    return `${number} is an odd number.`;
  }
}

function startRepl() {
  rl.question('Enter a number (or type "exit" to quit): ', (input) => {
    if (input.toLowerCase() === 'exit') {
      console.log('Goodbye!');
      rl.close();
      return;
    }

    const number = parseInt(input);

    if (isNaN(number)) {
      console.log('Please enter a valid number.');
    } else {
      console.log(checkOddOrEven(number));
    }

    startRepl();
  });
}

startRepl();
