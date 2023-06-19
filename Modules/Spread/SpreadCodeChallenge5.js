/**Write a function that takes in an array of strings and returns a new array 
 * containing all the strings in alphabetical order. */


function sortStrings(strings) {
    // Create a new array to store the sorted strings.
    const sortedStrings = [];
  
  
    for (const string of strings) {
      sortedStrings.push(string);
    }
  
    // Sort the new array using the built-in sort() method.
    sortedStrings.sort();
  
    // Return the sorted array.
    return sortedStrings;
  }

  const strings = ["apple", "banana", "cherry", "avocado", "african mango"];

  const sortedStrings = sortStrings(strings);
  
  console.log(sortedStrings); // ["apple", "avocado", "banana", "cherry", "african mango"]
  
