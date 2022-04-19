import React from 'react'
import { Button } from '@mui/material'
import './Home.css'
import backgroundVideo from './PexelsVideos2711127.mp4'

const Home = () => {
  return (
    <>
      <video autoPlay loop muted id='video'>
        <source src= {backgroundVideo} type='video/mp4' />
      </video>
      <div id='homepageFloat'>
        <h2>Make your dream a reality</h2>
        <Button variant="contained">Learn More</Button>
      </div>
    </>
  )
}

export default Home