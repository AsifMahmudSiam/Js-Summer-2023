//Write a function that takes an array of numbers as input and returns
// the sum of all the numbers in the array.


let numberArray = [1,2,3,4,5,6,7,8,9];
let sum = 0; 

function totalSum (numberArray){

    numberArray.map((number)=>{
        
        sum += number;

    });
    return sum;
}


let result = totalSum(numberArray);
console.log(`Total Sum of the Array: ${result}`);