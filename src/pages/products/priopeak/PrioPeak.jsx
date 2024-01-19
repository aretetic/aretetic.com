import React from 'react'
import './PrioPeak.css'
import { Grid, Image, } from 'semantic-ui-react'

const PrioPeak = () => {
    return (
    <>
        <div class='pageContainer'>
            <div class='pageContent'>
                <Grid stackable relaxed>
                    <Grid.Row>
                        <Grid.Column>
                            <h1>
                                Unifying Perspectives, Empowering Decisions: Discover Consensus with PrioPeak.
                            </h1>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <h2>
                                PrioPeak leverages advanced analytics and social-choice technology to identify and align group priorities for strategic decision-making
                            </h2>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <h3>
                            PrioPeak is an innovative solution designed to identify and evaluate key priorities and consensus areas within groups or organizations. By integrating advanced techniques like social listening, interviews, web scraping, and Natural Language Processing (NLP), PrioPeak expertly navigates through complex group dynamics to unearth underlying commonalities and priorities.
                        </h3>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image src="/images/content/kinuvian_a_simple_graphic_created_in_pointillism_style_that_loo_28018443-6653-442e-9a66-245443e94776.png" size='large' centered style={{ borderRadius: '8px', }} />
                        </Grid.Column>
                        <Grid.Column width={8} verticalAlign='middle'>
                            <center>
                                <h3>
                                    Key Features
                                </h3>
                            </center>
                            <ol type='1'>
                                <li>
                                    <strong>Comprehensive Data Collection:</strong> Uses a combination of social listening, in-depth interviews, and web scraping to gather extensive data from various sources.
                                </li>
                                <li>
                                    <strong>Advanced NLP Processes:</strong>  Employs sophisticated NLP methodologies to analyze and interpret the collected data, ensuring a thorough understanding of the topic areas.
                                </li>
                                <li>
                                    <strong>Computational Social-Choice Mechanisms (ComSOC):</strong> Utilizes cutting-edge ComSOC techniques to analyze group preferences and identify common ground among diverse participants.
                                </li>
                                <li>
                                    <strong>Iterative Evaluation:</strong> Implements iterative steps with diverse COMSOC methods to pinpoint the most crucial and least satisfying outcomes for the group.
                                </li>
                                <li>
                                    <strong>Predictive Analytics:</strong> Leverages predictive analytics to create accurate mental models and information architectures, aiding in future decision-making processes.
                                </li>
                                <li>
                                    <strong>Long-Term Strategic Planning:</strong> Offers insights and strategies effective for making educated decisions over a 3 to 5-year horizon.
                                </li>
                            </ol>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                        <center>
                            <h2>
                            Benefits:
                            </h2>
                        </center>
                        <ul>
                            <li><strong>Enhanced Decision-Making:</strong> Facilitates more informed and strategic decisions by understanding group dynamics and priorities.</li>
                            <li><strong>Conflict Resolution:</strong> Aids in resolving conflicts by identifying common priorities and areas of agreement.</li>
                            <li><strong>Future-Ready Strategies:</strong> Provides a framework for developing long-term strategies based on predictive models.</li>
                            <li><strong>Efficient Consensus Building:</strong> Streamlines the process of reaching consensus within groups, saving time and resources.</li>
                            <li><strong>Customizable Solutions:</strong> Adapts to various organizational contexts and groups, offering tailored insights and recommendations.</li>
                        </ul>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Image src='' size='large' centered />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    </>
    )
  }
  
  export default PrioPeak