/*Build Object for Employees: An employee can be represented as an object with attributes such as 
name, age, salary, and job title. It can also have functions like work,take a break, and attend a meeting. */


// Create a Employee object

let employee = 
{
    name : 'Asif Siam',
    age : 23,
    salary: 46000,
    job : 'Security Officer',
    work : function()
    {
        console.log('Working 7am to 7pm');
    },
    break : function()
    {
        console.log('Taking Break 1pm');
    },
    meeting : function()
    {
        console.log('Attending meeting at 6pm');
    },
}

console.log(employee);
employee.work();
employee.break();
employee.meeting();