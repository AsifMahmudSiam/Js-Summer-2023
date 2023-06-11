// Declear product array

let product = [

    {
        Name : 'Product A',
        price : 10,
        quantity : 5,
    },

    {
        Name : 'Product B',
        price : 20,
        quantity : 3,
    },

    {
        Name : 'Product C',
        price : 15,
        quantity : 7,
    },

    {
        Name : 'Product D',
        price : 25,
        quantity : 2,
    },

    {
        Name : 'Product E',
        price : 30,
        quantity : 4,
    },

];

let lowestPrice = product[0].price
let cheapestProduct = product[0];
let i=0;

// using while loop
while(i<=product.length-1)
{
    if(product[i].price<lowestPrice)
    {
        lowestPrice = product[i].price;
        cheapestProduct = product[i];
    }

    i++

}

console.log(`${cheapestProduct.Name} Lowest price at $${lowestPrice}`);
