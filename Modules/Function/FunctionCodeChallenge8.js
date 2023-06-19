//Write a function that takes in an array of numbers and returns the smallest number in the array.

let numberArray = [131,55,45,43,56,60,70,88,93];

let smallest =numberArray[0];

function findSmallest(numberArray)
{
    for(let i of numberArray)
    {
        if(i<smallest)
        {
            smallest=i;
        }
        
    }
    return smallest;
    
   
}

let result = findSmallest(numberArray)
console.log(`Smallest Number : ${result}`)



