/* Build Object for  Dogs: A dog can be represented as an object with attributes
 such as breed, age, and color. It can also have functions like bark, wag tail, and fetch.*/

// Create a dog object 

let dog = 
{
    bread :'Labrador',
    age : 5,
    colour : 'Brown',
    bark : function()
    {
        console.log('Dog Barking Normal');
    },
    tail : function()
    {
        console.log('Its Tail is Long');
    },
    fetch : function()
    {
        console.log('Fetching power is Good');
    },

}

console.log(dog);
dog.bark();
dog.tail();
dog.fetch();