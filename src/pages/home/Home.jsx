import React from 'react'
import { } from '@mui/material'
import './Home.css'
import backgroundVideo from './PexelsVideos2711127.mp4'

const Home = () => {
  return (
    <>
              <video autoPlay loop muted id='video'>
                <source src= {backgroundVideo} type='video/mp4' />
              </video>
              <h2>this is some text</h2>
    </>
  )
}

export default Home