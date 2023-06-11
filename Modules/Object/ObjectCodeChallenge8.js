/*Suppose you are building a blog application and you want to display a list of all the blog posts. 
You have an array of blog post objects, where each object has properties such 
as title, author, date, and content. 
Find out if date field is empty on any object*/

let blogPost = [{

    title : 'The Importance of regular English',
    author : ' Mikel Clark',
    date : '06/23/12',
    content: 'Its about reguular use of english rule',
},
{
    title : 'Regular Exercise',
    authon : 'Jhonson',
    date : '',
    content : 'This book is about regular fitness',

},]

for (let blogkey in blogPost)
{
    if(!blogPost[blogkey].date)
    {
        console.log(`Date field is empty please enter a valid date at "${blogPost[blogkey].title}"  `);
    }
    else
    {
        console.log(blogPost[blogkey]);
    }
   
}

