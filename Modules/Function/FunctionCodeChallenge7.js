/**Write a function that takes in two numbers and returns the larger of the two. */

let numberOne = 25;
let numberTwo = 30; 

function FindLarger(numberOne,numberTwo)
{
        if (numberOne>numberTwo)
        {
            return numberOne;
        }
        else if (numberTwo>numberOne)
        {
            return numberTwo
        }

}

let result = FindLarger(numberOne,numberTwo);
console.log(`Larger Number: ${result}`);