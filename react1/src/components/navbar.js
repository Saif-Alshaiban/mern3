import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function Navbar () {

return (
    <Box sx={{ flexGrow: 1 , width:'100vw' }}>
    <AppBar position="static">
      <Toolbar>
     
        <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
          Employee App
        </Typography>
        <Button color="inherit">Add</Button>
      </Toolbar>
    </AppBar>
  </Box>
)

}

export default Navbar;