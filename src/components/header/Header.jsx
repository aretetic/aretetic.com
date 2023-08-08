import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../navigation/Navigation'
import { Grid, Image } from 'semantic-ui-react'

const Header = () => {
  return (
    <Grid id='headerContainer' justifyContent="center" alignItems="center" stackable>
      <Grid.Row>
        <Grid.Column width={6} >
          <Link to='/'>
            <Image src='/images/fullLogoBrandmark.svg' id='logo' alt='A and S forming land and a mountain' />
          </Link>
        </Grid.Column>
        <Grid.Column width={2}>

        </Grid.Column>
        <Grid.Column width={8}>
          <Navigation />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Header