//Write a function that takes an array of numbers as input and returns a
// new array with all the even numbers from the original array.

let numberArray = [1,2,3,4,5,6,7,8,9,];


let findeven = numberArray.map((even)=>{

    if(even%2===0)
    {
        return even;
    }
    else
    {
        return 'Undefined';
    }
    
});

console.log(findeven);