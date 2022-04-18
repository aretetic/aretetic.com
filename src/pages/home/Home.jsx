import React from 'react'
import { Grid } from '@mui/material'
import './Home.css'

const Home = () => {
  return (
    <Grid container spacing={2} justifyContent='center' alignItems='center'>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div width="100%" height="100%">
              <video autoplay loop muted id="backgroundVideo">
                <source src="public/video/Pexels Videos 2711127.mp4" type='video/mp4' />
              </video>
            </div>
        </Grid>
    </Grid>
  )
}

export default Home