//Write a function that takes in an array of strings and returns the longest string in the array.

let givenString = ['Apple','Banana','Cherry','Avocado','African Mango'];

let longest = givenString[0];

function findLargest(givenString)
{
    for(let i of givenString)
    {
        if(i.length>=longest.length)
        {
            longest=i;
        }
   
    }

    return longest;
}


let result = findLargest(givenString );
console.log(`Largest String: ${result}`);