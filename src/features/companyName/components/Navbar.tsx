import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import css from  './Navbar.module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 'auto',
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      flexGrow: 1,
    },
  },
  navItems: {
    display: 'flex',
    marginLeft: '5rem',
  },
  navbar: {
    backgroundColor: '#fff',
    boxShadow: 'none',
  },
  buttons: {
    marginLeft: 'auto',
    textTransform: 'lowercase',
  },
  signUp: {
    border: '1px solid #d1d0d6',
    padding: '0.35rem 1rem',
    marginLeft: '2rem',
  },
  logo: {
    
  }
}));

export default function Navbar() {
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <header className={css.Navbar}>
      <div className={classes.root}>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <img
              src={require('../img/Oval.png')}
              alt="logo"
              className={classes.logo}
            />

            {isMobile ? (
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="primary"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <>
                <ul className={classes.navItems}>
                  <li>
                    <Link to="#/">Find Co-Founders</Link>
                  </li>
                  <li>
                    <Link to="#/">Find Startups</Link>
                  </li>
                  <li>
                    <Link to="#/">See posts</Link>
                  </li>
                </ul>
                <div className={classes.buttons}>
                  <Button>Sign In</Button>
                  <Button className={classes.signUp}>Sign Up</Button>
                </div>
              </>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </header>
  );
}
