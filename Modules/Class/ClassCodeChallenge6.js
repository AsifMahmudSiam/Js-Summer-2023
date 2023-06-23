/**Create a class called BankAccount that has accountNumber, accountHolderName, 
 * and balance properties, and a deposit method that takes in an amount and adds it 
 * to the balance. Create an instance of the BankAccount class and call the deposit 
 * method with an amount. */

class BankAccount {
    accountInfo = {
        accountNumber: 929867,
        accountHolderName:'Asif Mahmud Siam',
        balance: 0,

    }
  
    deposit(addBlance)
    {
        this.accountInfo.balance+=addBlance;
       
    }
} 

let result = new BankAccount();
result.deposit(500);
console.log(result.accountInfo);