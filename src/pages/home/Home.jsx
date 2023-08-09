import React from 'react'
import { Button } from 'semantic-ui-react'
import './Home.css'
import backgroundVideo from './PexelsVideos2711127.mp4'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <video autoPlay loop muted id='video'>
        <source src= {backgroundVideo} type='video/mp4' />
      </video>
      <div id='frontpageContent'>
        <p>At Aretetic, we supercharge your business's trajectory with our top-tier management consulting. Envision a surge in your success – that's our promise. We ignite and fuel your business's innate brilliance, turning innovations into action. Leveraging our vast experience and unwavering belief in your potential, we're not just consultants but partners in your pursuit of excellence. Let Aretetic be your beacon in the vast sea of opportunities.</p>
        <h2>Make Good Things Happen</h2>
        <Link to='/aretetic-solutions-services'>
          <Button color='black' inverted  variant="contained">Get Started</Button>
        </Link>
        
      </div>
    </>
  )
}

export default Home