import React, { useState } from 'react';
import './Services.css'
import { Grid, Button } from 'semantic-ui-react'


function Services() {
    const [currentContent, setCurrentContent] = useState('default');
  function showStrategy() {
    setCurrentContent("Strategy");
  }
  
  function showCultureAndChange() {
    setCurrentContent("Culture and Change");
  }
  
  function showAgileProjectManagement() {
    setCurrentContent("Agile Project Management");
  }
  return (
    <>
            <div class='pageContainer'>
                <div class='pageContent'>
                    <Grid stackable relaxed>
                        <Grid.Row>
                            <Grid.Column>
                            <h2>
                                Unleash your business potential with our exquisite, tailor-made solutions, designed to empower organizations with unprecedented growth and productivity!
                            </h2> 
                            <h2>
                                Experience the pinnacle of success with our highly acclaimed, game-changing core services:
                            </h2>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row stretched columns='equal'>
                            <Grid.Column>
                                <Button color='blue' onClick={showStrategy}>
                                    Strategy
                                </Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button color='blue' onClick={showCultureAndChange}>
                                    Culture and Change
                                </Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button color='blue' onClick={showAgileProjectManagement}>
                                    Agile Project Management
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                {
                                currentContent === 'default' && (
                                    <div>
                                        <center>
                                        <h3 style={{ color: '#ccc'}}>Please select a service category above to see our service offerings in more depth.</h3>
                                        </center>
                                    </div>
                                )
                                }
                                {
                                currentContent === "Strategy" && (
                                    <div>
                                    <h3>Our strategy consulting is tailored to drive business success in today's competitive landscape. Our offerings include:</h3>
                                    <ul>
                                        <li>
                                            <strong>Startup Acceleration:</strong> Propel your startup to the next stage with our bespoke acceleration strategies, ensuring a faster route to market and sustainable growth.
                                        </li>
                                        <li>
                                            <strong>Strategic Realignment:</strong> Refocus and recalibrate your business strategies to stay ahead of the curve, ensuring alignment with evolving market trends and customer needs.
                                        </li>
                                        <li>
                                            <strong>Business Models:</strong> Evaluate, design, and refine monetization strategies that are resilient, innovative, and adaptable to the rapidly changing business environment.
                                        </li>
                                        <li>
                                            <strong>Market Development:</strong>  Identify untapped markets and strategize entry points to expand your brand's footprint and capitalize on new revenue streams.
                                        </li>
                                        <li>
                                            <strong>Marketing:</strong> Craft and implement result-driven marketing campaigns that resonate with your target audience, driving engagement and boosting ROI.
                                        </li>
                                    </ul>
                                    <p>With Aretetic by your side, strategy isn't just a plan—it's a pathway to unparalleled success.</p>
                                    </div>
                                    
                                )
                                }
                                {
                                currentContent === "Culture and Change" && (
                                    <div>
                                        <h3>We understand that a thriving company culture is integral to business success, and adapting to change is pivotal in a rapidly evolving world. Our "Culture and Change" offerings encompass:</h3>
                                        <ul>
                                            <li><strong>UX & CX</strong>: Enhance both User Experience (UX) and Customer Experience (CX), ensuring seamless interactions that foster loyalty and satisfaction.</li>
                                            <li><strong>Development or Turnaround</strong>: Whether you're in a growth phase or navigating challenges, our tailored strategies ensure organizational resilience and revitalization.</li>
                                            <li><strong>Organizational Design</strong>: Streamline structures, roles, and responsibilities to optimize efficiency, collaboration, and strategic alignment.</li>
                                            <li><strong>Change Management</strong>: Navigate transitions smoothly with strategies that prioritize communication, stakeholder engagement, and a systematic approach to implementing change.</li>
                                        </ul>
                                        <p>With Aretetic's expertise in "Culture and Change", your organization isn't just adapting—it's thriving and evolving for a sustainable future.</p>
                                    </div>

                                )
                                }
                                {
                                currentContent === "Agile Project Management" && (
                                    <div>
                                        <h3>Agility is at the heart of everything we do. In a world of rapid technological advancements, our "Agile Project Management" services ensure you stay ahead:</h3>
                                        <ul>
                                            <li><strong>MVP Development</strong>: Quickly transform ideas into viable products. We help you create a Minimum Viable Product (MVP) that captures the essence of your vision and gathers crucial feedback for iterative improvement.</li>
                                            <li><strong>Product Modeling</strong>: Construct a strategic roadmap for your product. Our team collaborates with you to define, visualize, and prioritize features, ensuring a clear pathway from concept to completion.</li>
                                            <li><strong>Web Dev and Scaling</strong>: Whether you're launching a new platform or scaling an existing one, our agile web development practices ensure robust performance, scalability, and responsiveness every step of the way.</li>
                                        </ul>
                                        <p>With Aretetic's "Agile Project Management" services, you're not just keeping pace with change—you're leading it, ensuring optimal results at every project phase.</p>
                                    </div>

                                )
                                }
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                  </div>
                  </div>
    </>
  )
}

export default Services