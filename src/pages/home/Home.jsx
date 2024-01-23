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
        <p>
          Welcome to Aretetic Solutions, where innovation in computational social choice meets top-tier management consulting to redefine decision-making and research. Our pioneering suite, including PrioPeak™, SoChoice™, and Community-Driven Innovation (CDI), empowers companies; from Fortune 500 and leading research institutions to loosely organized communities , supercharging their trajectory towards success.
        </p>
        <p>
          We don't just offer insights; we ignite your business's brilliance, turning innovative ideas into actionable strategies. With our vast experience and a deep belief in your potential, Aretetic is not just a consultant but a partner in your pursuit of excellence. Join us as we navigate the vast sea of opportunities, shaping the future of decision intelligence and responsive research.
        </p>
        <center>
          <Link to='/aretetic-solutions-services'>
            <Button color='black' inverted size='huge'  variant="contained">
              Make Good Things Happen
            </Button>
          </Link>
        </center>
        
      </div>
    </>
  )
}

export default Home