import React from 'react'
import { Grid } from '@mui/material'
import './Home.css'

const Home = () => {
  return (
    <>
    <h2> hello?</h2>
    <Grid container spacing={2} justifyContent='center' alignItems='center'>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <video autoplay loop muted id="video">
                <source src='../public/video/PexelsVideos2711127.mp4' type='video/mp4' />
              </video>
              <h2>this is some text</h2>
        </Grid>
    </Grid>
    </>
  )
}

export default Home