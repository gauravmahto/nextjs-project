
// Sample code to perform I/O:

const os = require('os');
const assert = require('assert');
const { EOL } = os;
const { strictEqual } = assert;

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
  stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
  main(stdin_input);
});

function main(input) {
  const [dataArr, sum, length] = processInput(input);
  const output = getMinNum(sum, length);
  process.stdout.write(String(output));       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Write your code here

/**
 * @param {string} input
 */
function processInput(input) {

  const inputArr = input.split(EOL);

  const length = Number(inputArr[0]);

  let sum = 0;

  const dataArr = inputArr[1].split(' ').map(item => {
    const num = Number(item);
    sum += num;
  });

  strictEqual(dataArr.length, length);

  return [dataArr, sum, length];

}

function getMinNum(sum, length) {

  return Math.floor(sum / length) + 1;

}

/// -----------------
/// -----------------

// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
  stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
  main(stdin_input);
});

function main(input) {
  const dataArr = processInput(input);
  process.stdout.write(String(getOutput(dataArr)));       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Write your code here
/**
 * @param {string} input
 */
function processInput(input) {

  const dataArr = input.split(' ').map(item => Number(item));

  strictEqual(dataArr.length, 2);

  return dataArr;

}

function findGcd(numberOne, numberTwo) {

  while (numberTwo) {
    [numberOne, numberTwo] = [numberTwo, numberOne % numberTwo];
  }

  return numberOne;

}

function countDivisor(num) {

  let result = 0;
  for (let count = 1; count <= Math.sqrt(num); count++) {

    if (num % count === 0) {

      if (num / count === count) {

        result += 1;

      } else {

        result += 2;

      }

    }

  }

  return result;

}

function getOutput([numberOne, numberTwo]) {

  const gcd = findGcd(Math.abs(numberOne), Math.abs(numberTwo));

  return countDivisor(gcd);

}
