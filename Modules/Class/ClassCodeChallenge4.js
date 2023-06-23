/**Create a class called Rectangle that has width and height properties, 
 * and a getArea method that returns the area of the rectangle. 
 * Create an instance of the Rectangle class and call the getArea method. */


class rectangle {

    measurement = {
        height : 5,
        width : 5,
    }

    getArea(){
        let area = (this.measurement.height*this.measurement.width)
        console.log(`Area Of the Rectangle is : ${area}`);
    }
}

let result = new rectangle();
result.getArea();

module.exports = rectangle;