//Write a function that takes an array of strings as input and returns
// a new array with all the strings converted to uppercase.


let students = ['Asif','Imrana','Stev','Jhon','Mikel','Larrie','Earleen'];

let convertUpperCase = students.map((convert)=>convert.toUpperCase());

console.log(`After Converting Students Array in UpperCase: ${convertUpperCase}`);