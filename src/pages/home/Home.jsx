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
      <div class='contentContainer'>
        <h2>Aretetic provides management consulting services to accelerate your trajectory towards making good things happen. We shephard your spark of genius from notion to motion with novel approaches, years of experience, and unwavering belief.</h2>
        <Button variant="contained">Learn More</Button>
      </div>
    </>
  )
}

export default Home