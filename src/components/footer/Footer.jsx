import { Grid } from '@mui/material'
import React from 'react'
import './Footer.css'
import copyright from '../images/Copyright.svg'

const Footer = () => {
  return (
    <>
    <div id='footer'>
      <Grid container direction='row' justifyContent='center' alignItems='center' spacing={2}>
        <Grid item xs={12} md={8}>
          
        </Grid>
        <Grid item xs={12} md={4}>
          <p className='rightJustify xs' id='copyright'><img src={copyright} alt='copyright symbol' width='8' /> 2022 Aretetic Solutions, LLC</p>
        </Grid>
      </Grid>
    </div>
    </>
  )
}

export default Footer