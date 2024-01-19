// netlify/functions/send-email.js
const sgMail = require('@sendgrid/mail');

exports.handler = async function(event, context) {
  // Parse the body contents into an object.
  const data = JSON.parse(event.body);

  console.log(data.message);
  // Set the SendGrid API key.
  sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

  const firstname = data.firstname;
  const lastname = data.lastname;
  const email = data.email;
  const phone = data.phone;
  const productdemo = data.productdemo;
  const subject = data.subject;
  const message = data.message;

  // Create the email details.
  const msg = {
    to: `Ian@Aretetic.com`,
    from: `Ian@Aretetic.com`,
    subject: subject,
    text: `Name: ${firstname} ${lastname}/n Email: ${email}/n Demo Interest:${productdemo}/n Phone: ${phone}/n Subject: ${subject}/n Message: ${message}`,
    html: 
    `
    <h3>New Submission on Contact Form</h3>
    <p><b>Name:</b> ${firstname} ${lastname}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Demo Interest:</b> ${productdemo}</p>
    <p><b>Message:</b> ${message}</p>
    `
    // You can add more details here, such as `cc`, `bcc`, `attachments`, etc.
    // See: https://github.com/sendgrid/sendgrid-nodejs/blob/main/packages/mail/USE_CASES.md
  };

  try {
    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message sent' }) 
    };
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }

    return {
      statusCode: error.code,
      body: error.message
    };
  }
};