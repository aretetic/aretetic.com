import { Grid } from '@mui/material'
import React from 'react'
import './Header.css'
import logo from './logo_withSloganWhite.png'

const Header = () => {
  return (
    <>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div>
          <image src={logo} />
          </div>
      </Grid>
    </Grid>
    </>
  )
}

export default Header