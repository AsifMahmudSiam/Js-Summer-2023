//Write a function that takes in an array of objects representing people, 
//where each object has properties for name, age, and gender,
// and returns an array of objects representing only the 
//people who are over the age of 18.

let userInfo = 
[ {
    name: 'Asif',
    age: 14,
    gender: 'M',
},
{
    name: 'Mikel',
    age: 15,
    gender: 'M',

},
{
    name: 'Lizz',
    age: 25,
    gender: 'F',
}];


function getInfo(userInfo)
{
    let result = []
    for(let i in userInfo)
    {
        if(userInfo[i].age>18)
        {
            
            result.push(userInfo[i]);

        }
       

    }
    return result;
}


let result = getInfo(userInfo)
console.log(result);