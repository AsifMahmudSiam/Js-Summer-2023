// create a array 
let student = ['Asif','Mark','Stev','Jhon','Mikel'];

// print the array
console.log(`Print the Student Array : ${student}`);

//using push function
let pushStudentArray = student.push('Siam');

// print the push value 
console.log(`Print the push value  : ${pushStudentArray}`);


// print the array after push
console.log(`After push the Student Array is : ${student}`);

//using pop function
let popStudentArray = student.pop()

//print the pop value
console.log(`Print the pop value : ${popStudentArray}`);

// print the array after pop
console.log(`After pop the Student Array is : ${student}`);

//  using shift function 
let shiftStudentArray = student.shift()

// print the shift value
console.log(`Print the shift value : ${shiftStudentArray} `);

// print the array after shift 
console.log(`After shift the student array is : ${student}`);


// using unshift function 
let unshiftStudentArray = student.unshift('Mahmud');

// print the unshift value
console.log(`Print the unshift value : ${unshiftStudentArray}`);

//print the array after unshift 
console.log(`After unshift the student array is : ${student}`);

// using splice function
let splicdeStudentArray = student.splice(2,1,'Larrie','Earleen','Dyan');

// print the splice value
console.log(`Print the splice Value : ${splicdeStudentArray}`);

// print the array after splice 
console.log(`After splice the student array is : ${student}`);