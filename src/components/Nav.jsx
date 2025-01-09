import React from 'react'
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div> <AppBar>
    <Toolbar>
      <Link to="/c">
    <Button variant='contained'>Counter</Button>
    </Link>
    <Link to="/b">
   <Button variant='contained'>Display</Button>
   </Link>
    </Toolbar>
  </AppBar>
    </div>
  )
}

export default Nav