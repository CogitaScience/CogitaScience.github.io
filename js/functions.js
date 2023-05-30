function sendEmail()
{
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "tholub99@gmail.com",
        Password : "36E7A5A74AD4AEF2B073674872B8720E9C51",
        To : 'tholub99@gmail.com',
        From : document.getElementById("Email").value,
        Subject : document.getElementById("Subject").value,
        Body : `Name: ${document.getElementById("Name").value}\n
        Company: ${document.getElementById("Company").value}\n
        Message: ${document.getElementById("Message").value}`
    }).then(
    message => alert(message)
    );
}