/**Create a class called Animal that has a name property and a speak method. 
 * The speak method should log a message to the console saying "Hello, my name is {name}." 
 * Create an instance of the Animal class and call the speak method. */

class animal {
    info ={

        name : 'Spot',

    }

speak()
{
    console.log(`Hello, my name is ${this.info.name}.`);
}

}

let showinfo = new animal();
showinfo.speak();