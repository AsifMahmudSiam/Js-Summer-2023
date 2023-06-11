/*Build Object for  Bank accounts: A bank account can be represented 
as an object with attributes such as account number, balance, and account type. 
It can also have functions like deposit, withdraw, and transfer */


// Create a object og bank account

let bankAccount = 
{
    accountNumber : 73838393839,
    balance : 200000,
    accountType : 'Checking',
    deposit : function()
    {
        console.log('Last deposit 06/11/2033 . Ammount: $5000');
    },
    withdraw : function()
    {
        console.log('Last withdraw 01/11/2023. Ammount: $ 200');
    },
    transfer : function()
    {
        console.log('Last transfer 25/05/2023. Ammount: $2000');
    },

}

console.log(bankAccount);

bankAccount.deposit();
bankAccount.withdraw();
bankAccount.transfer();