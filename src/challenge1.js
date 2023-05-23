// Using the function keyword declare a function called `greet`
// that returns a String "Hi, Ed!"

console.log('Hi,Ed!');

//Challenge 1

function squareSum(numArray) {
    let totSum = 0;

    for (let counter = 0; counter < numArray.length; counter++) {
        totSum += numArray[counter] ** 2;
    }

    return totSum;
}

const numbers = [1, 2, 2];
const result = squareSum(numbers);

console.log(result);