//Write a function that takes an array of objects representing products 
//and returns an array containing only the products that are currently in stock.

const products = [
    {
      id: 1,
      name: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      published: 1925,
      stock: 10,
    },
    {
      id: 2,
      name: "To Kill a Mockingbird",
      author: "Harper Lee",
      published: 2005,
      stock: 5,
    },
    {
      id: 3,
      name: "1984",
      author: "George Orwell",
      published: 1949,
      stock: 20,
    },
    {
      id: 4,
      name: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      published: 2000,
      stock: 15,
    },
    {
      id: 5,
      name: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      published: 1979,
      stock: 10,
    },
  ];

  let stockProduct = products.map((pStock)=>pStock.stock)

  console.log(stockProduct);