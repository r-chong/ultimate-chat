import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header({ handleDrawerToggle }) {
  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="Open Navigation"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        Genius Chat
      </Typography>
    </Toolbar>
  );
}
