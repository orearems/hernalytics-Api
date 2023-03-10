import { Grid, GridItem} from '@chakra-ui/react'
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <Grid px="90px" templateColumns="repeat(5, 1fr)">
      <GridItem colSpan={1}>
        <Logo />
      </GridItem>
      <GridItem colSpan={4}>
        <Navbar />
      </GridItem>
    </Grid>
  );
}

export default Header;