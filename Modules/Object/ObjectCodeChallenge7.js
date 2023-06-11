//Remove the description property from the Product object you created earlier.

//Suppose the price of the Product object you created earlier changes. Now the price increased by $10


 //Create a product object

 let product = 
 {
    name : 'iPhone 14 Pro MAX ',
    price : 1200,
    manufacturer : 'USA',
    category : 'Electronics',

 }
 
product.description = 'iPhone 14 is the next generation of Apples flagship smartphone.';

product.price = 1210;

delete product.description // remove description
 console.log(product);
