/**Write a function that takes in an array of strings and returns a new array containing 
 * only the strings that start with the letter "A". */

let givenString = ['Apple','Banana','Cherry','Avocado','African Mango'];


function startWithA(givenString)
{
    let newArray = [];
    for(let i of givenString)
    {
        if(i.startsWith('A'))
        {
             // newArray[i].push(i).startWith('A');
            newArray.push(i);
        }
    }
    return newArray;
}


let result = startWithA(givenString)
console.log(result);