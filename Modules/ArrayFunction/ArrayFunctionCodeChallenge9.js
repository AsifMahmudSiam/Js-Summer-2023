//Write a function that takes an array of strings as input and returns
// a new array with all the strings that have a length of 4 or less.


let students = ['Asif','Imrana','Stv','Jhon','Mikel','Larrie','Earleen'];

let findlength = students.map((sLength)=>{
    if(sLength.length<=4)
    {
        return sLength;
    }
    else
    {
        return 'Undefined';
    }
}
)

console.log(findlength);