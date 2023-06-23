//**Create a class called Product that has name, price, and description properties,
// and a discount method that takes in a percentage and returns the discounted price.
// Create an instance of the Product class and call the discount method with a percentage. */


class product {
 iphone= {
        name : 'iPhone 14 Pro MAX ',
        price : 1200,
        manufacturer : 'USA',
        category : 'Electronics',
        description : 'iPhone 14 is the next generation of Apples flagship smartphone.',

    }
    getDiscount(amount)
    {
        this.iphone.price-=amount;
    }
}


const discountAmount = new product();
discountAmount.getDiscount(100);
console.log(discountAmount.iphone);
