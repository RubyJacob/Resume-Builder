import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';

function Header() {
    const projectInfo = "A Resume Builder Web App that allows users to create, edit, and download professional resumes easily using interactive forms and real-time preview features. Built with HTML, CSS, and JavaScript, ensuring a clean UI and smooth user experience."
  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'purple'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <img width={'30px'} src="https://tse3.mm.bing.net/th/id/OIP.lyXd0humrEprnVJ3RdTBLAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <Link to={'/'} className='text-light text-decoration-none'> rBuilder</Link>
          </Typography>
          <Tooltip title = {projectInfo}> <Button color="inherit">Login</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header