//Write a function that takes an array of objects representing 
//books and returns an array containing the titles of those books.

let books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      published: 1925,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      published: 2005,
    },
    {
      title: "1984",
      author: "George Orwell",
      published: 1949,
    },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      published: 2000,
    },
    {
      title: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      published: 1979,
    },
  ];

let findTitle = books.map((bTitle) => bTitle.title)

console.log(findTitle);