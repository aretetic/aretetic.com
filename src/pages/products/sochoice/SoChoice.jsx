import React from 'react'
import './SoChoice.css'
import { Link } from 'react-router-dom'
import { Image, Button } from 'semantic-ui-react'

const SoChoice = () => {
    return (
    <>
        <div class='productCallToAction'>
            <center><Link to='/contact-us'>
                    <Button positive>Request a Demo</Button>
                </Link></center>
        </div>
        <div class='pageContainer'>
            <div class='pageContent'>
                <h1>SoChoice</h1>
                <Image src="/images/content/quadraticVotingBox.png" size="large" floated="right" rounded />
                <h2>The Future of Fair Voting at Your Fingertips</h2>
                <p>Imagine a world where your community could not only decide on priorities together and with efficiency, but also indicate the degree of those preferences, allocate resources to those preferences, and provide metadata around who was being impacted the most by the implementation of those preferences.</p>
                <p>SoChoice does all that... and more. Built off some of the most advanced voting theories in the world today, and made simple so anybody can use it, from small, grassroots communities, to major companies.</p>
                <p>SoChoice has no upfront cost, and is so transparent in how it works that we can guarantee that implemented properly, your next fundraising campaign will be vastly more successful than any you have run to date. People are far more likely to place money into problems they care directly about, instead of a nebulous entity that may or may not fix their actual problem.</p>
                <h3 style={{ clear: 'both', }}>How It Works</h3>
                <dl>
                    <dt><strong>Listening</strong></dt>
                    <dd>SoChoice starts with social listening, whether through another of our products (looking at you <Link to="/aretetic-products/priopeak">PrioPeak</Link>) or through more traditional methods like social scraping or focus groups.</dd>
                    <dt><strong>Voting</strong></dt>
                    <dd>The results of the listening are implemented directly in the voting system, participants allocate "vote tokens" that simultaneously produce preference, degree of preference, and (if desired) allocate resources alongside those preferences.</dd>
                    <dt><strong>Implement</strong></dt>
                    <dd>SoChoices output is so straight forward that there is no fancy analysis, there is simply implementation of results, funded by the resources allocated during the voting. Simple, straightforwrd, powerful.</dd>
                </dl>
            </div>
        </div>
    </>
    )
  }
  
  export default SoChoice