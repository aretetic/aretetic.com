import React from 'react'
import './Services.css'
import backgroundImage from './pexels-sagui-andrea-618833.jpg'
import { Grid } from '@mui/material'

const Services = () => {
  return (
    <>
        <img src={backgroundImage} alt='mountains' id='servicesPageBackground' />
            <div class='contentContainer'>
                <Grid container justifyContent='space-around' alignContent='center' spacing={2}>
                    <Grid item xs={12}>
                        <h2 class='bold xl'>Bespoke solutions to any business or organizational need. Core services with proven track record of success:</h2>
                    </Grid>
                    <Grid item xs={4} class='centerJustify'>
                        <h3 class='semiBold'>Culture and Change</h3>
                        <ul class='leftJustify regular'>
                            <li>
                                UX & CX
                            </li>
                            <li>
                                Development or Turnaround
                            </li>
                            <li>
                                Organizational Design
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={4} class='centerJustify'>
                        <h3 class='semiBold'>Strategy</h3>
                        <ul class='leftJustify regular'>
                            <li>
                                Startup Acceleration
                            </li>
                            <li>
                                Strategic Realignment
                            </li>
                            <li>
                                Business Models
                            </li>
                            <li>
                                Market Development
                            </li>
                            <li>
                                Marketing
                            </li>
                            <li>
                                Change Management
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={4} class='centerJustify'>
                        <h3 class='semiBold'>Agile Project Management</h3>
                        <ul class='leftJustify regular'>
                            <li>
                                MVP Development
                            </li>
                            <li>
                                Product Modeling
                            </li>
                            <li>
                                Web Dev and Scaling
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12}>
                        <h2 class='bold xl'>Don’t see your need represented here? Contact us and we’ll get you the right people to make it happen.</h2>
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