import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './fullLogoBrandmark.svg'

const Header = () => {
  return (
    <div id="headerContainer">
    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={0} sm={0} md={1}></Grid>
      <Grid item xs={12} sm={12} md={2}>
        <Link to='/'>
          <img src={logo} id='logo' alt='A and S forming land and a mountain'/>
        </Link>
      </Grid>
      <Grid item xs={0} sm={0} md={1}></Grid>
      <Grid item xs={12} sm={12} md={7}>
        <Grid container justifyContent='space-between' alignItems='center' id='mainMenu' spacing={12}>
          <Grid item xs>
            <Link to='/'>
              <Button class='mainMenuItem xl'>Home</Button>
            </Link>
          </Grid>
          <Grid item xs>
            <Link to='/services'>
              <Button class='mainMenuItem xl'>Services</Button>
            </Link>
          </Grid>
          {/*<Grid item xs>
            <Link to='/blog'>
              <Button class='mainMenuItem'>Blog</Button>
            </Link>
          </Grid>*/}
        </Grid>
      </Grid>
    </Grid>
    </div>
  )
}

export default Header