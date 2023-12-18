import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { brown } from '@mui/material/colors';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact','Services'];
function NavBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">contact</Button>
            <Button color="inherit">services</Button>
            <Button color="inherit">Signup</Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Learning Portal
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ background:brown,textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      
      <CssBaseline />
      <AppBar 
      
      component="nav">
        <Toolbar>
      
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ marginLeft:"100px", flexGrow: 1, display: {XS: 'brown', sm: 'block' } }}
          >
            Learning Portal
          </Typography>
          <Box sx={{ display: { xs: 'brown', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'white', '&:hover': { backgroundColor: 'black' } }}>                {item}

              </Button>
             
            ))}
          </Box>
          <Button variant="contained">Login</Button>
          <Button variant="contained">Sign Up</Button>
       

        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box
      
    
  component="img"
  sx={{
    height: "100%",
    width:"100%",
    padding: 0,
    position:'relative',
    zIndex:-1,

   
  }}
  alt="Online Learning"
  src="https://e1.pxfuel.com/desktop-wallpaper/130/168/desktop-wallpaper-online-learning-online-education.jpg"
  /> 
    
  </Box>
  );
}
function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" href="http://localhost:3001/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  
  const defaultTheme = createTheme();
  
   function StickyFooter() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '0',
          }}
        >
          <CssBaseline />
         
          <Box
            component="footer"
            sx={{
              py: 3,
              px: 2,
              mt: 'auto',
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[200]
                  : theme.palette.grey[800],
            }}
          >
            <Container maxWidth="sm">
              <Typography variant="body1">
                My sticky footer can be found here.<Copyright />
              </Typography>
              
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;