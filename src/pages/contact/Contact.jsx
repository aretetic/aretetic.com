import React from 'react'
import ContactForm from './ContactForm'
import './Contact.css'
import { Grid } from 'semantic-ui-react'

const Contact = () => {
    return (
        <>
         <div class='pageContainer'>
            <div class='pageContent'>
                <center><h1>Please fill out the form below to get in touch with us to discuss services, or get a product demo.</h1></center>
                <Grid stackable relaxed style={{ marginTop: 55 }}>
                    <Grid.Row>
                        <Grid.Column>
                            <ContactForm />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <hr />
                <center>
                <p>Address: 8680 Miralani Dr. #120 San Diego, CA 92040</p>
                <p>Phone: <a href='tel:8583366769'>(858) 215-1822</a></p>
                <p>Email: <a href='mailto:info@aretetic.com'>Info@aretetic.com</a></p>
                </center>
            </div>
        </div>
        </>
        )
    }
    
    export default Contact