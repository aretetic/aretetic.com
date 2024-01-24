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
                        <Grid.Column width={8} verticalAlign='middle'>
                            {/**<div style={{ width: '450px', overflow: 'hidden', marginLeft: 'auto', marginRight: 'auto', borderRadius: '13px', }}>
                                <video autoPlay loop muted style={{ width: '800px', marginLeft: '-175px', }}>
                                    <source src='/videos/PrioPeakVideo1.mp4' type='video/mp4' />
                                </video>
                             </div>**/}
                             <Image src="/images/content/keyfeatures_priopeak.png" size='large' centered style={{ borderRadius: '8px', }} />
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
                        <Grid.Column width={8} verticalAlign='middle'>
                        <center>
                            <h3>
                            Benefits
                            </h3>
                        </center>
                        <dl>
                            <dt>
                                Enhanced Decision-Making
                            </dt>
                            <dd>
                                Facilitates more informed and strategic decisions by understanding group dynamics and priorities.
                            </dd>
                            <dt>
                                Conflict Resolution
                            </dt>
                            <dd>
                                Aids in resolving conflicts by identifying common priorities and areas of agreement.
                            </dd>
                            <dt>
                                Future-Ready Strategies
                            </dt>
                            <dd>
                                Provides a framework for developing long-term strategies based on predictive models.
                            </dd>
                            <dt>
                                Efficient Consensus Building
                            </dt>
                            <dd>
                                Streamlines the process of reaching consensus within groups, saving time and resources.
                            </dd>
                            <dt>
                                Customizable Solutions
                            </dt>
                            <dd>
                                Adapts to various organizational contexts and groups, offering tailored insights and recommendations.
                            </dd>
                        </dl>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Image src='/images/content/benefits_priopeak.png' size='large' centered />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                                <p>
                                    <strong>PrioPeak</strong> is an ideal solution for a broad spectrum of organizations, including large corporations, government agencies, non-profit organizations, educational institutions, and research groups. It excels in harmonizing diverse departmental priorities within corporations and assists government agencies in balancing stakeholder interests for effective policy-making. Non-profits can align their missions with community and donor expectations, while educational institutions benefit from streamlined administrative and curriculum decision-making. Research groups use PrioPeak to focus on critical research areas. Its blend of social listening, NLP, and computational social-choice methods offers a tailored, data-driven approach to consensus building and strategic planning across varied organizational needs.
                                </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={4}>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <h3>How It Works:</h3>
                                <dl>
                                    <dt>Data Collection</dt>
                                    <dd>PrioPeak gathers data from multiple sources, including social media, web content, and direct interviews.</dd>
                                    <dt>Data Analysis</dt>
                                    <dd>Utilizes NLP and other analytical tools to process and understand the data.</dd>
                                    <dt>Priority Identification</dt>
                                    <dd>Applies ComSOC methods to identify key priorities and consensus areas.</dd>
                                    <dt>Outcome Evaluation</dt>
                                    <dd>Iteratively evaluates the importance and satisfaction levels of different outcomes.</dd>
                                    <dt>Predictive Modelling</dt>
                                    <dd>Develops predictive models to guide future decisions.</dd>
                                    <dt>Strategic Planning</dt>
                                    <dd>Provides a framework for long-term decision-making based on the analysis.</dd>
                                </dl>
                        </Grid.Column>
                        <Grid.Column width={4}>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    </>
    )
  }
  
  export default PrioPeak