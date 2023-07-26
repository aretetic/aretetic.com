const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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')
const msg = {
  to: 'ian@aretetic.com', // Change to your recipient
  from: 'ian@aretetic.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })