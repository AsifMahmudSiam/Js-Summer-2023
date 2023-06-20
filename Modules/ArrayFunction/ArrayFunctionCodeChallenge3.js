/**Write a function that takes an array of objects representing users and 
 * returns the first user whose email address matches a given email. */

let users = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "janedoe@example.com",
    },
    {
      id: 3,
      name: "Samantha Smith",
      email: "samanthasmith@example.com",
    },
    {
      id: 4,
      name: "Michael Jones",
      email: "michaeljones@example.com",
    },
    {
      id: 5,
      name: "Sarah Johnson",
      email: "sarahjohnson@example.com",
    },
  ];

  let userEmail = 'sarahjohnson@example.com';

  let findUser = users.find((user)=>user.email===userEmail);
 
  
  if(findUser)
  {
    
    console.log(findUser);
  }
  else
  {
    console.log(`We dont fount this ${userEmail} email adress user`);
  }
  

