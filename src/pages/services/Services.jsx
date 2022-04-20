import React from 'react'
import './Services.css'
import backgroundImage from './pexels-sagui-andrea-618833.jpg'
import { Grid } from '@mui/material'

const Services = () => {
  return (
    <>
        <img src={backgroundImage} alt='mountains' id='servicesPageBackground' />
            <div class='contentContainer'>
                <Grid container justifyContent='center' alignContent='center' spacing={2}>
                    <Grid item xs={12}>
                        <p class='semiBold lg'>Aretetic offers a variety of services meant to support the highest level of business operations. All aspects of our services are bespoke, so please get in touch with us below to discuss your needs.</p>
                    </Grid>
                    <Grid item xs={12} id='contactFormWrapper'>
                        <form id='contactForm'>
                            <input type='text' placeholder='Name' class='input' />
                            <input type='text' placeholder='Email' class='input' />
                            <input type='text' placeholder='Phone' class='input' />
                            <textarea placeholder='Message' className='input message' />
                            <input type='submit' class='submit md' value='Send' />
                        </form>
                    </Grid>
                </Grid>
            </div>
    </>
  )
}

export default Services