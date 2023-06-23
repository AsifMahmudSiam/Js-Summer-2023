/**Create a class called Person that has name and age properties, 
 * and a greet method that logs a message to the console saying 
 * "Hello, my name is {name} and I am {age} years old." Create an instance
 *  of the Person class and call the greet method. */


class person {

    info = {
        name: 'Asif Mahmud Siam',
        age : 23,
    }

    greet(){

        console.log(`Hello, my name is ${this.info.name} and I am ${this.info.age} years old.`);

    }
}

let personInfo = new person();

personInfo.greet();