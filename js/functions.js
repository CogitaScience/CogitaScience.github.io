function sendEmail()
{
    Email.send({
        SecureToken: "e5c14316-c8d6-4c95-9fbc-1a3cd3391148",
        To : 'sales@cogitascience.com',
        From : "contact@cogitascience.com",
        Subject : `New Contact Inquiry: ${document.getElementById("Subject").value}`,
        Body : `Name: ${document.getElementById("Name").value}<br>
        From: ${document.getElementById("Email").value}<br>
        Company: ${document.getElementById("Company").value}<br>
        Subject: ${document.getElementById("Subject").value}<br>
        Message: ${document.getElementById("Message").value}`
    }).then(
    message => alert(message)
    );
}