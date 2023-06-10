// Declar three variables

let numberOne = 30;
let numberTwo = 15;
let numberThree = 45;


// Checking If else condition
if(numberOne>=numberTwo && numberOne>=numberThree)
{
    console.log(`${numberOne} is largest number`);/// numberOne numberTwo numberThree
    

}
   
else if (numberTwo>=numberOne && numberTwo>=numberThree)
{
    console.log(`${numberTwo} is largest number`);   
}


else if (numberThree>=numberOne && numberThree>=numberTwo) 
{
    console.log(`${numberThree} is largest number`);
}

else 
{
    console.log(`All value is eqall each other`);
}