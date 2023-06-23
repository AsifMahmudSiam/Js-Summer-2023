/**Create a class called Square that extends the Rectangle class and 
 * has a sideLength property. Override the getArea method in the Square 
 * class to return the area of the square. 
 * Create an instance of the Square class and call the getArea method. */

const rectangle = require("./ClassCodeChallenge4");

class Square extends rectangle {

    measurement2 ={
        sideLength:5,
        height : 5,
        width : 5,
    
    }

    getArea(){
        let area = (this.measurement2.height*this.measurement2.width*this.measurement2.sideLength)
        console.log(`Area Of the Square is : ${area}`);
    }
}
let newResult = new Square()
newResult.getArea();




