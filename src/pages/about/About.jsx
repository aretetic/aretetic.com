import React from 'react';
import './About.css';
import { Grid } from 'semantic-ui-react';
import CommunityCarousel from 'components/carousel/community/CommunityCarousel';
import IndustryCarousel from 'components/carousel/industry/IndustryCarousel';

const About = () => {
  return (
    <>
        <div class='pageContainer'>
            <div class='pageContent'>

                <h1>About Aretetic Solutions, LLC</h1>
                <p>Welcome to <strong>Aretetic Solutions</strong>, the nexus of innovation and business transformation.</p>

                <h2>Our Mission:</h2>
                <p>To empower businesses to not just meet, but exceed their potential. In an era of digital transformation and unprecedented challenges, our goal is to provide tailored, dynamic solutions that turn obstacles into opportunities.</p>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={8}>
                      <IndustryCarousel />
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <CommunityCarousel />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <h2>What Sets Us Apart:</h2>
                <ol>
                    <li><strong>Expertise:</strong> Our team comprises seasoned professionals who bring a wealth of experience from diverse industries. This rich tapestry of knowledge allows us to provide insights that are both broad in scope and deep in detail.</li>
                    <li><strong>Innovation:</strong> At Aretetic, we believe in pushing boundaries. Our methodologies are rooted in creativity, ensuring that our clients always stay one step ahead of the curve.</li>
                    <li><strong>Partnership:</strong> We pride ourselves on forging lasting relationships with our clients. You're not just another account to us; you're a partner. We celebrate your successes and navigate challenges by your side.</li>
                    <li><strong>Results-Oriented Approach:</strong> We're driven by outcomes. Every strategy we devise, every solution we recommend, is focused on driving tangible, measurable results for your business.</li>
                </ol>

                <h2>Our Journey:</h2>
                <p>Since our inception in 2009, Aretetic Solutions, LLC, has been a beacon for businesses seeking growth and transformation. We've navigated the tumultuous waters of industry shifts and technological revolutions, always emerging stronger, and always guiding our clients to safer shores.</p>

                <p>Join us on a journey towards excellence. At Aretetic, your vision is our mission. Together, let's shape the future of business.</p>

            </div>
        </div>
    </>
  )
}

export default About