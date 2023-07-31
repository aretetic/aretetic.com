import React from 'react'
import { Button } from '@mui/material'
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
        <p>At Aretetic, we empower your business to soar beyond expectations with our expert management consulting services. Imagine the thrill of experiencing an upward leap in your journey to success, that's exactly what we're here to create. We not only kindle the spark of genius within your business but fuel it, transforming your innovative notions into dynamic motion. With our creative methodologies, rich trove of experience, and relentless faith in your potential, we're more than just consultants - we're your partners in the quest for business excellence. Let Aretetic guide you through the mesmerizing world of opportunity that awaits your enterprise.</p>
        <h2>Make Good Things Happen</h2>
        <Link to='/services'>
          <Button  variant="contained">Get Started</Button>
        </Link>
        
      </div>
    </>
  )
}

export default Home