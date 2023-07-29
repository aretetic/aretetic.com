const express = require('express');
const sgMail = require('@sendgrid/mail');
const app = express();
app.use(express.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('./services', (req, res) => {
  const { name, email, message } = req.body;

  const content = {
    to: 'your-email@example.com',
    from: email,
    subject: `New Message From ${name}`,
    text: message,
    html: `<p>${message}</p>`
  };

  sgMail
    .send(content)
    .then(() => res.status(200).send('Message sent successfully'))
    .catch((error) => res.status(400).send('Message not sent.'));
});

app.listen(3001, () => console.log('Server is up on port 3001'));
