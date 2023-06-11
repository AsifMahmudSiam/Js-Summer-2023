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
for (const products of product) {
    for (const property in products) {
      console.log(`${property}: ${products[property]}`);
    }
  }