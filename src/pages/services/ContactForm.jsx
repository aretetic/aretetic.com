import React, { useState } from 'react';
import './ContactForm.css'
import { Form, Message } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


const ContactForm = () => {
  const [formState, setFormState] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit called'); // add this line
    fetch('/.netlify/functions/send-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formState),
  
})
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
   setFormState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
    });
    setIsSuccess(true);
  return response.json();

}
})

.then(data => console.log(data))

.catch(error => console.log('There was an error!', error));
  };

  
  return (
    <>
    <Form className="contactForm" success={isSuccess} onSubmit={handleSubmit} unstackable>
      <Form.Group widths='equal'>
        <Form.Field required>
          <label style={{ fontSize: 16 }}>
            First Name:
          </label>
            <input type="text" name="firstname" onChange={handleInputChange} value={formState.firstname} required />
        </Form.Field>
        <Form.Field required>
          <label style={{ fontSize: 16 }}>
            Last Name:
          </label>
            <input type='text' name='lastname' onChange={handleInputChange} value={formState.lastname} required />
        </Form.Field>
      </Form.Group>
      <Form.Field>
        <label style={{ fontSize: 16 }}>
          Phone:
        </label>
          <input type='number' name='phone' onChange={handleInputChange} value={formState.phone} required />
      </Form.Field>
      <Form.Field required>
      <label style={{ fontSize: 16 }}>
        Email:
      </label>
        <input type="email" name="email" onChange={handleInputChange} value={formState.email} required />
      </Form.Field>
      <Form.Field required>
        <label style={{ fontSize: 16 }}>
          Subject
        </label>
        <input type="text" name="subject" onChange={handleInputChange} value={formState.subject} required />
      </Form.Field>
      <Form.Field required>
      <label style={{ fontSize: 16 }}>
        Message:
      </label>
        <textarea  name="message" onChange={handleInputChange} value={formState.message} required />
      </Form.Field>
      <Message
      success
      header='Form Completed'
      content="Thanks for contacting us, we will be in touch soon!"
    />
      <Form.Button type="submit">Submit</Form.Button>
      </Form>
    </>
  );
};

export default ContactForm;
