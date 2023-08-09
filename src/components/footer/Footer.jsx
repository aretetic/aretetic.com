import { Grid } from 'semantic-ui-react'
import React from 'react'
import './Footer.css'
import copyright from '../images/Copyright.svg'

const Footer = () => {
  function CurrentYearComponent() {
    const currentYear = new Date().getFullYear();
  
    return <span>{currentYear}</span>;
  }
  
  return (
    <>
      <Grid id='footer' direction='row' justifyContent='center' alignItems='center' spacing={2}>
        <Grid.Row>
          <Grid.Column width={12}>
            
          </Grid.Column>
          <Grid.Column width={4}>
            <p className='rightJustify s' id='copyright'><img src={copyright} alt='copyright symbol' width='13' /> <CurrentYearComponent /> Aretetic Solutions, LLC</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default Footer