/**Write a function that takes in an object and a key-value pair to add to the object,
 *  and returns a new object with the key-value pair added. */

// Dclear a function

function addKeyValuePair(originalObject,key,value)
{
    return {...originalObject,[key]:value};
}

const originalObject = {name: 'Jhon', Age: 30};

const newObject = addKeyValuePair(originalObject, 'adress', '381 chester street');



console.log(newObject);
