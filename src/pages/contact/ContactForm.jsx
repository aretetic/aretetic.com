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
    productdemo: '',
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
    productdemo: '',
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
        <label style={{ fontSize: 16}}>
          Product Interest:
        </label>
        <div style={{ display: 'flex', }}>
          <span style={{ margin: '21px 21px', }}>
            <input 
              type='radio' 
              id='PrioPeak' 
              name='productdemo' 
              onChange={handleInputChange} 
              value="PrioPeak" 
              checked={formState.productdemo === "PrioPeak"} 
              style={{ marginLeft: '40%', }}
            />
            <label for="PrioPeak"><h3><strong>PrioPeak</strong></h3></label>
          </span>
          <span style={{ margin: '21px 21px', }}>
            <input 
              type='radio' 
              id='SoChoice' 
              name='productdemo' 
              onChange={handleInputChange} 
              value="SoChoice" 
              checked={formState.productdemo === "SoChoice"} 
              style={{ marginLeft: '40%', }}
            />
            <label for="SoChoice"><h3><strong>SoChoice</strong></h3></label>
          </span>
          <span style={{ margin: '21px 21px', }}>
            <input 
              type='radio' 
              id='CDI' 
              name='productdemo' 
              onChange={handleInputChange} 
              value="CDI" 
              checked={formState.productdemo === "CDI"} 
              style={{ marginLeft: '40%', }}
            />
            <label for="CDI"><h3><strong>CDI</strong></h3></label>
          </span>
          <span style={{ margin: '21px 21px', }}>
            <input 
              type='radio' 
              id='DigitalCabinet' 
              name='productdemo' 
              onChange={handleInputChange} 
              value="DigitalCabinet" 
              checked={formState.productdemo === "DigitalCabinet"} 
              style={{ marginLeft: '40%', }}
            />
            <label for="DigitalCabinet"><h3><strong>Digital Cabinet</strong></h3></label>
          </span>
          <span style={{ margin: '21px 21px', }}>
            <input 
              type='radio' 
              id='Services' 
              name='productdemo' 
              onChange={handleInputChange} 
              value="Services" 
              checked={formState.productdemo === "Services"} 
              style={{ marginLeft: '40%', }}
            />
            <label for="Services"><h3><strong>Services</strong></h3></label>
          </span>
        </div>
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
      <Form.Button color='blue' type="submit">Submit</Form.Button>
      </Form>
    </>
  );
};

export default ContactForm;
