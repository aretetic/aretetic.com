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
      <div id='frontpageContent' class='xl'>Aretetic provides management consulting services to accelerate your trajectory towards making good things happen. We shephard your spark of genius from notion to motion with novel approaches, years of experience, and unwavering belief.</div>
      <div class='front contentContainer'>
        <h2>Make Good Things Happen</h2>
        <Link to='/services'>
          <Button  variant="contained">Get Started</Button>
        </Link>
        
      </div>
    </>
  )
}

export default Home