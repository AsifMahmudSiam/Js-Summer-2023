/**Create a class called Car that has make, model, and year properties, and 
 * a start method that logs a message to the console saying "The {make} {model} is starting."
 *  Create an instance of the Car class and call the start method.

 */

class car {

    carInfo ={
        make : 'Ford',
        model : 'Mustang',
        year : 2015,
    }

    start()
    {
        console.log(`The ${this.carInfo.make} ${this.carInfo.model} is starting`);
    }
}

let showInfo = new car();
showInfo.start();