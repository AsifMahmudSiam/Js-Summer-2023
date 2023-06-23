/**Create a class called Person that has name and email properties, 
 * and a sendEmail method that takes in a message and sends an email to the person's 
 * email address. Create an instance of the Person class and call the sendEmail 
 * method with a message. */

class person {
    emaiInfo={
        name : 'Asif Mahmud Siam',
        email : 'asifmahmudsiam@gmail.com',
    
    }

    sendMail(message)
    {
        console.log(`'${message}' this is the message.\nEmail is Sent ${this.emaiInfo.email}`);
    }
}

let emailSent = new person();
emailSent.sendMail('Hi Asif');