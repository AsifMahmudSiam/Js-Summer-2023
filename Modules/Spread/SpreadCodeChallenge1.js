/**Write a function that takes in two arrays of numbers and returns 
 * a new array containing all the elements of both arrays */

// Declear a function 
function joinArray(array1,array2)
{
    return [...array1,...array2];
}

//Declaear two array
const array1 = [1,2,3];
const array2 = [4,5,6];

const newArray = joinArray(array1,array2)
console.log(newArray);