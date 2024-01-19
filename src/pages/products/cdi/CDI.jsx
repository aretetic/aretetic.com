import React from 'react'
import './CDI.css'
import { Image, Grid } from 'semantic-ui-react'

const CDI = () => {
    return (
      <>
      <div class='pageContainer'>
        <div class='pageContent'>
            <Grid stackable relaxed>
                <Grid.Row>
                    <Grid.Column>
                        <h1>
                            Discover priorities, understand interconnections, and forecast needs with the power of real-world data
                        </h1>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <h2>
                            Community Driven Innovation™ (CDI) methodology optimizes and humanizes technology and techniques to uncover real-world priorities
                        </h2>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Image src="/images/content/CDI-howitworks.svg" fluid />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Image src='/images/content/cdi-identify-listen-copy.svg' fluid />
                    </Grid.Column>
                    <Grid.Column width={8} verticalAlign='middle'>
                        <center>
                        <h3>
                            IDENTIFY
                        </h3>
                        <p>
                            Listen as all community stakeholders – parents, patients, caregivers, experts – share their experiences on a topic or condition to scientifically aggregate learnings and eliminate group-think bias.
                        </p>
                        </center>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8} verticalAlign='middle'>
                        <center>
                        <h3>
                            DESIGN
                        </h3>
                        <p>
                            CDI applies scientific and mathematical theories to design data collection content and tools to extract structured data from real-world lived experiences.
                        </p>
                        </center>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Image src='/images/content/cdi-design-frame-copy.svg' fluid />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                     <Grid.Column width={8}>
                        <Image src='/images/content/TTODI-960x508.png' fluid />
                    </Grid.Column>
                    <Grid.Column width={8} verticalAlign='middle'>
                        <center>
                        <h3>
                            MEASURE & IMPROVE
                        </h3>
                        <p>
                            Extract priority topics and contextual relationships to inform study design, re-frame past findings, draft communications and resources within the community, and leverage this iterative model for ongoing learning.
                        </p>
                        </center>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
      </div>
      </>
    )
  }
  
  export default CDI