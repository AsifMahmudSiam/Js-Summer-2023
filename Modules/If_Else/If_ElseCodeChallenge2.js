// Declear a variable age
let age = 66;

//Checking if else condition
if (age<18) 
{
    console.log(`You age is ${age}, You are a minor`);
}
else if (age>=18 && age<=65)
{
    console.log(`You age is ${age}, You are an adult`);
}
else if (age>=66)
{
    console.log(`You age is ${age}, You are a senior citizen`);
}

else
{
    console.log(`Invalid Age`);
}