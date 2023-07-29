import React from 'react'
import { Grid } from '@mui/material'
import ContactForm from './ContactForm'

function Services() {
  return (
    <>
          <div>
                <Grid container justifyContent='space-around' alignContent='center' spacing={2}>
                    <Grid item xs={12}>
                        <h2 class='bold xl'>Bespoke solutions to any business or organizational need. Core services with proven track record of success:</h2>
                    </Grid>
                    <Grid item xs={4} class='centerJustify'>
                        <h3 class='semiBold lg'>Strategy</h3>
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
                        </ul>
                    </Grid>
                    <Grid item xs={4} class='centerJustify service'>
                        <h3 class='semiBold lg'>Culture and Change</h3>
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
                            <li>
                                Change Management
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={4} class='centerJustify service'>
                        <h3 class='semiBold lg'>Agile Project Management</h3>
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
                        <h2 class='bold xl'>Contact Us</h2>
                    </Grid>
                    <Grid item xs={11}>
                        <ContactForm />
                    </Grid>
                  </Grid>
            </div>
    </>
  )
}

export default Services