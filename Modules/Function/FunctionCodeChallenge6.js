/**Write a function that takes in an array of objects representing books, 
 * where each object has properties for title, author, and published, 
 * and returns an array of strings representing the titles of 
 * all the books published in the year 2000 or later. */
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


function findTitle(books)
{
    let result = [] ;
    for(let i of books)
    {
            if(i.published>=2000)
            {
                result.push(i.title);
            }
    }
    return result;
    
}


let result = findTitle(books);

console.log(result);