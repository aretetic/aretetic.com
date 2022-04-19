import { Button, Grid } from '@mui/material';
import './Header.css';
import logo from './logo_withSloganWhite.png'

const Header = () => {
  return (
    <div id="headerContainer">
    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={0} sm={0} md={1}></Grid>
      <Grid item xs={12} sm={12} md={2}>
        <img src={logo} id='logo' alt='A and S forming land and a mountain'/>
      </Grid>
      <Grid item xs={0} sm={0} md={1}></Grid>
      <Grid item xs={12} sm={12} md={7}>
        <Grid item container justifyContent='space-between' alignItems='center' id='mainMenu' spacing={12}>
          <Grid item xs>
            <Button class='mainMenuItem'>Home</Button>
          </Grid>
          <Grid item xs>
            <Button class='mainMenuItem'>Services</Button>
          </Grid>
          <Grid item xs>
            <Button class='mainMenuItem'>Blog</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </div>
  )
}

export default Header