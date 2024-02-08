import React from 'react'
import './DigitalCabinet.css'
import withPasswordProtection from './withPasswordProtection';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const DigitalCabinet = () => {
    return (
    <>
        <div class='productCallToAction'>
            <center><Link to='/contact-us'>
                    <Button positive>Request a Demo</Button>
                </Link></center>
        </div>
        <div className='pageContainer'>
            <div className='pageContent'>
            <section>
                <h1>Mission</h1>
                <p>DigitalCabinet is dedicated to empowering disease advocacy groups through a state-of-the-art, easy-to-use platform designed to collect and store disease research data. Our commitment lies in streamlining data management processes and providing secure, easily accessible storage solutions to empower leaders to make meaningful changes. Our goal is to reinforce advocacy groups' efforts in promoting research, increasing awareness, and aiding the outcome improvement for diseases on a global scale.</p>
            </section>

            <section>
                <h1>Vision</h1>
                <p>DigitalCabinet foresees a future where the ease and reach of conventional research tools—such as phone calls, paper, pen, and filing systems—are seamlessly woven into the digital era. We envision redefining the research process with smart, efficient, and adaptable tools that hasten research timelines, cut costs, and produce tangible benefits for study participants. We aspire to alter the disease research landscape by merging tried and true best practices with advanced technology, fostering innovations that yield health improvements and progress people can feel.</p>
            </section>

            <section>
                <h2>Our Construction:</h2>
                <p>At the heart of our construction is the principle of user data sovereignty; the platform will function on a consent framework that respects user preferences regarding data management. Users can permit each minor data usage or allow for broad data sharing. This approach aims to encourage wide participation in data collection and maximize the data's usefulness for research purposes.</p>
                <p>The technological solutions we're developing will function cohesively, presenting users with a smooth experience while being modular. This allows for independent use of each component, facilitating collaboration with researchers from other groups who might prefer to retain their existing systems while still integrating with DigitalCabinet. The intention behind this part of the design is to ensure that data that exists on other platforms or is going to be collected on these platforms can be integrated into Digital Cabinet and even allow people to reclaim access to data they previously lost control. We will work to accomplish this through a series of systems; the central one will focus on a self-sovereign identity system to bring data from many different sources together if the right questions are present to identify an individual through the system.</p>
                <p>We intend to integrate with any data exported from other systems.</p>
            </section>

            <section>
                <h2>Rollout Phases:</h2>
                <h3>Phase 1:</h3>
                <p>Initiating on February 5th, phase 1 concentrates on GDPR/HIPAA-compliant data storage from various inputs, primarily Luna Export files. The data will be securely housed within a HIPAA-compliant S3 bucket on the AWS cloud. Aretetic is working to secure necessary alignments within AWS to guarantee data confidentiality and prohibit Amazon from utilizing our server-stored data.</p>
                <p>Initially, Aretetic will upload data manually while simultaneously building a basic interface for organizations to manage their storage spaces. Data analytics during this phase will involve group-specific assessments or automated visualizations via D3 libraries for group leadership. Phase 1 will be considered complete when the admin side of DigitalCabinet is at a stable distribution, where administrators of groups can begin building their surveys within the system.</p>
                <h3>Phase 2:</h3>
                <p>In this phase, we will create a user account framework, allowing individuals to manage their data, including adding, updating, and removing information. This system will prioritize accessibility and usability with user authentication systems such as 2FA, self-sovereign identity, security questions, and/or individual unique links.</p>
                <p>As this phase progresses, Admins will have already been building their surveys for deployment within the system, allowing us to work on multiple development streams simultaneously, so when the surveys are ready to be taken, the first iterations of the UI to take those surveys will also be completed.</p>
                <h3>Phase 3:</h3>
                <p>This phase is everything beyond our first simple needs, things like IRB integration, EHR, complex data analysis environments, and other things we all voted for on the card sort that were part of our Luna exit process. The sky is the limit here as the collaborative works together to determine the most needed.</p>
            </section>

            <section>
                <h2>Timeline:</h2>
                <p>The number of groups participating will directly influence the progression speed of these phases. The greater the participation, the more we can invest in development each month, expediting the growth of our solutions.</p>
                <p>The following tiers are “early bird” and include decreasing costs in exchange for working towards this future together when it is still a vision. After February 20th these tiers will all increase by 50% in cost. </p>
            </section>
            <section>
            <h2>Cost:</h2>
            <p>After modeling costs and looking at all the advocacy group expectations around costs, we have arrived at three membership tiers.</p>
            <p>Several criteria evaluate a group before being assigned a tier, including group size, yearly budget, and rarity of the disease the organization serves.</p>
            
            <h3>Tier 1:</h3>
            <p>$1,000/month – or – $11,000/year paid annually. One month free!<br />
            This is the standard tier for the product suite; most groups will be at this level.</p>
            
            <h3>Tier 2:</h3>
            <p>$2,000/month – or – $22,000/year paid annually.<br />
            This tier is for groups with above-average results on the criteria listed above and can afford this level. We have worked hard to keep costs in this tiering low, and this tier helps the business model become sustainable.</p>
            
            <h3>Special Consideration Tier:</h3>
            <p>$500/month – or – $5,500/year paid annually.<br />
            This tier is for groups that fall below the capacity needed for Tier 1 groups and is a special consideration on an individual group basis.</p>
            
            <p>All three tiers will have the same access to the platform and the exact representation in whichever governance system the community decides on together. The founding community members will have a specific say in the type and nature of the governance system, and future groups will become members of whatever that governance system is deemed to be by the founders.</p>
            </section>

            </div>
        </div>
    </>
    )
  }
  
  export default  withPasswordProtection(DigitalCabinet, 'PEERAdmin2024');