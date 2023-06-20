/**Write a function that takes an array of objects representing purchases and returns the total 
 * amount spent on those purchases */
const purchases = [
    {
      id: 1,
      productId: 12345,
      quantity: 1,
      price: 100,
    },
    {
      id: 2,
      productId: 54321,
      quantity: 2,
      price: 50,
    },
    {
      id: 3,
      productId: 78901,
      quantity: 3,
      price: 25,
    },
  ];

  let totalPrice = 0;
  for (let purchase of purchases) {
    totalPrice += purchase.quantity * purchase.price;
  }
  
  console.log(`Total amount of Spent :${totalPrice}`);
