import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../navigation/Navigation'
import { Grid, Image } from 'semantic-ui-react'

const Header = () => {
  return (
    <Grid id='headerContainer' justifyContent="center" alignItems="top" stackable>
      <Grid.Row>
        <Grid.Column width={2}>

        </Grid.Column>
        <Grid.Column width={4} >
          <Link to='/'>
            <Image src='/images/brandmarkVector.svg' id='logo' alt='A and S forming land and a mountain, the logo of Aretetic Solutions' />
          </Link>
        </Grid.Column>
        <Grid.Column width={10}>
          <Navigation />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Header