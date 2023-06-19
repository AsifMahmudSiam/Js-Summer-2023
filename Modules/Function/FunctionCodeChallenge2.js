//Write a function that takes in a string and returns the string reversed

function reversedString(givenString)
 {
    let reversed = "";
    for (let i = givenString.length - 1; i >= 0; i--)
    {
      reversed += givenString[i];
    }
    return reversed;
  }
  
  let givenString = "I am Asif";
  let result = reversedString(givenString);
  console.log(`Reverse String is: ${result}`); // fisa ma I
  

