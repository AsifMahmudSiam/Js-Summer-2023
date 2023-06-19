//Write a function that takes in an array of numbers and returns the largest number in the array.


//Declering a function 

function findthelargestnumber(array)
{
    let largestNumber = array[0];
    for (let i of array)
    {

  
        if (array[i]> largestNumber)
        {
            largestNumber = array[i];
        }
    }

    return largestNumber;
}


// Declear a array of number
const numbersArray = [6,7,8,9,4,3,10,12];
let result = findthelargestnumber(numbersArray)

console.log(result);
