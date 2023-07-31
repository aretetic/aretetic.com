import React from 'react'
import ContactForm from './ContactForm'
import './Services.css'

function Services() {
  return (
    <>
            <div class='servicesContainer'>
                <div class='servicesContent'>
                    <div class='servicesLists'>
                    <span class='servicesTitle'>
                        <center>
                        <h2>Bespoke solutions to any business or organizational need. Core services with proven track record of success:</h2>
                        </center>
                    </span>
                    <span class='servicesList'>
                    <center>
                        <ul style={{ listStyleType: 'none' }}>
                            <li><h3>Strategy</h3></li>
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
                    </center>
                    </span>
                    <span class='servicesList'>
                        <center>
                        <ul style={{ listStyleType: 'none' }}>
                            <li><h3>Culture and Change</h3></li>
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
                        </center>
                    </span>
                    <span class='servicesList'>
                        <center>
                        <ul style={{ listStyleType: 'none' }}>
                            <li><h3>Agile Project Management</h3></li>
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
                        </center>
                    </span>
                    </div>
                    <div class='contactBlock'>
                        <div class='servicesTitle'>
                            <center>
                         <h2>Contact Us</h2>
                         </center>
                        </div>
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                  </div>
                  </div>
    </>
  )
}

export default Services