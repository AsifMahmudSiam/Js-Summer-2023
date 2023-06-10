//declear a password variable 
let password = 'Test1233';

if (password.length < 8) 
{
  console.log('Password too short');
}
 else if (/[a-zA-Z]/.test(password) && /\d/.test(password))
{
  console.log('Password accepted');
} 
else {
  console.log('Password rejected');
}
