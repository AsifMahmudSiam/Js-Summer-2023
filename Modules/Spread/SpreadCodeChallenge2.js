/**Write a function that takes in an array of strings and a string to add to the beginning of the array,
 *  and returns a new array with the string added to the beginning. */

//Declear a function

function addvalue(orginalArray,string)
{
    
    return[string,...orginalArray];
}


//Declear a array of string
const orginalArray = ['banana','apple','cherry'];
const string = 'Blubarry'


let newArray = addvalue(orginalArray,string);
console.log(newArray);