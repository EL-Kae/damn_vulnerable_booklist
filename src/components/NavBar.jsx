import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const barStyles = {
  flexGrow: 1,
  alignItems: 'center',
};

const barStylesOLD = {
  flexGrow: 1,
  alignItems: 'center',
};

const NavBar = () => (
  <div>
    <AppBar position="static" style={barStyles}>
      <Toolbar>
        <Typography color="inherit">
          <strong>READING LIST</strong>
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default NavBar;
