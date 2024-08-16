function sendComputerAccount() {
  // Open Google Sheets document
  var sheetId = "Replace_with_Sheet_id"; // Make sure you replace this with ID
  var ss = SpreadsheetApp.openById(sheetId);
  var userSheet = ss.getSheetByName("Sheet1");  // Make sure sheet is named correctly
  var userDataRange = userSheet.getDataRange();
  var userData = userDataRange.getValues();

  // Go through all users in .csv file (First row is header, so start from the second row)
  for (var i = 1; i < userData.length; i++) {
    var firstName = userData[i][0];  // First Column (FirstName)
    var lastName = userData[i][1];   // Second Column (LastName)
    var username = userData[i][2];   // Third Column (Username)
    var password = userData[i][3];   // Forth Column (Password)
    var recipientEmail = userData[i][4]; // Fifth Column (Email)

    // Email subject and message
    var subject = "New account created";
    var message = `
      <html>
      <body>
        <p>Hey <strong>${firstName} ${lastName}</strong>,</p>
        
        <p>Your new account is created. Here is your new account and password:</p>
        
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Password:</strong> ${password}</p>
        
        <p>After logging in it request you to change password. Password requirements are:</p>
        <ul>
          <li>At least 8 characters</li>
          <li>At least 1 capital letter</li>
          <li>At least 1 lowercase letter</li>
          <li>At least 1 number</li>
        </ul>

        <p>If you got any problems or any questions email us email@email.com</p> <!--Replace with your email-->
        
        <p>Best regards,<br>
        It Team</p>
      </body>
      </html>
    `;

    // Saada e-mail
    MailApp.sendEmail({
      to: recipientEmail,
      subject: subject,
      htmlBody: message
    });
  }
}
