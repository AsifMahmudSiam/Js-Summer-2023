/**Write a function that takes in an array of numbers and returns the sum of 
 * all the numbers in the array. */

function sumArray(array) {
    let sum = 0;
    for (let number of array) {
      sum += number;
    }
    return sum;
  }
  
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  const result = sumArray(numberArray);
  
  console.log(`Sum of the Array: ${result}`);
  