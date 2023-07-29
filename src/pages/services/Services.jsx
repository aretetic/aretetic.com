import React from 'react'
import ContactForm from './ContactForm'
import './Services.css'
import { Grid } from 'semantic-ui-react'

function Services() {
  return (
    <>
            <div class='servicesContent'>
                <Grid columns={3} style={{justifyContent: 'space-around', backgroundColor: `#fff`, width: `55%`, marginLeft: `auto`, marginRight: `auto`, borderRadius: 13,}}>
                    <Grid.Row>
                        <Grid.Column width={1}>

                        </Grid.Column>
                    <Grid.Column width={14}>
                        <center>
                        <h2 class='bold xl'>Bespoke solutions to any business or organizational need. Core services with proven track record of success:</h2>
                        </center>
                    </Grid.Column>
                    <Grid.Column width={1}>
                            
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column>
                        <center>
                            <h3>Strategy</h3>
                        </center>
                        <ul style={{ width: '50%', marginLeft: `auto`, marginRight: `auto` }}>
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
                    </Grid.Column>
                    <Grid.Column>
                        <center>
                        <h3>Culture and Change</h3>
                        </center>
                        <ul style={{ width: '50%', marginLeft: `auto`, marginRight: `auto` }}>
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
                    </Grid.Column>
                    <Grid.Column>
                        <center>
                            <h3>Agile Project Management</h3>
                        </center>
                        <ul style={{ width: '50%', marginLeft: `auto`, marginRight: `auto` }}>
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
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <center>
                         <h2>Contact Us</h2>
                         </center>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={14}>
                            <ContactForm />
                        </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  </div>
    </>
  )
}

export default Services