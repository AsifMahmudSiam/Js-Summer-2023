//Write a function that takes in an array of numbers and returns a new array
// containing only the even numbers from the original array.


let numberArray = [1,2,3,4,5,6,7,8,9,10,11,12];


function findEven(numberArray)
{
    let newArray = [];
    for ( let i of numberArray)
    {
        if(i%2===0)
        {
            newArray.push(i);
        }
        
    }
    return newArray;
}

let result = findEven(numberArray);
console.log(result);