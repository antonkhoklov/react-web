import React, { Fragment, useContext } from "react"
import { Link as RouterLink } from "react-router-dom"
import AppBar from "@material-ui/core/AppBar"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { observer } from "mobx-react-lite"
import CssBaseline from "@material-ui/core/CssBaseline"

import { Button } from "@material-ui/core"
import { RootStoreContext } from "../../app/stores/rootStore"
import logo from "../../assets/Unifounder_logo.png"
import MenuIcon from "@material-ui/icons/Menu"
import { Login } from "../login/Login"
import { SignUp } from "../signUp/SignUp"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    nav: {
      backgroundColor: "#E6ECF4",
    },
    logo: {
      flexGrow: 3,
      [theme.breakpoints.down("xs")]: {
        flexGrow: 3,
      },
      [theme.breakpoints.between("sm", "md")]: {
        flexGrow: 1,
        order: 2,
        marginLeft: theme.spacing(3),
      },
    },
    burgerMenu: {
      [theme.breakpoints.down("xs")]: {
        flexGrow: 1,

      },
      [theme.breakpoints.between("sm", "md")]: {
        flexGrow: 0,
        order: 1,
      },
    },
    buttonContainer: {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
      [theme.breakpoints.between("sm", "md")]: {
        order: 3,
      },
    },
    button: {
      backgroundColor: "#576867",
      margin: "0 5px",
      color: "white",
      borderRadius: "0",
      boxShadow: "none",
    },
    titleContainer: {
      flexGrow: 2,
      textAlign: "right",
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
      [theme.breakpoints.between("sm", "md")]: {
        display: "none",
      },
    },
    title: {
      textDecoration: "none",
      marginRight: theme.spacing(1),
      color: "#3B3A40",
      fontSize: "14px",
      "&:focus": {
        backgroundColor: "inherit",
        color: "#3B3A40",
      },
      "&:hover": {
        backgroundColor: "inherit",
        color: "#3B3A40",
      },
    },
    buttons: {
      backgroundColor: "transparent",
      boxShadow: "none",
      fontSize: "14px",
      "&:focus": {
        outline: "none",
      },
      "&:hover": {
        backgroundColor: "transparent",
        outline: "none",
        boxShadow: "none",
      },
    },
  })
)

const NavBar = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"))

  const classes = useStyles()
  const rootStore = useContext(RootStoreContext)
  const { isLoggedIn, user, logout, isUserProfile } = rootStore.userStore
  const { openModal } = rootStore.modalStore
  const token = window.localStorage.getItem("token")

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position="static" className={classes.nav}>
          <Toolbar>
            <Typography component={RouterLink} to="/" className={classes.logo}>
              <img src={logo} alt="UniFounder_Logo" />
            </Typography>
            {isMobile || isTablet ? (
              <MenuIcon className={classes.burgerMenu} />
            ) : null}
            <div className={classes.titleContainer}>
              {isLoggedIn && token && user && isUserProfile &&
                <React.Fragment>
                  <Typography
                    component={RouterLink}
                    to="/cofounder"
                    variant="h6"
                    className={classes.title}
                  >
                    YourProfile
                  </Typography>
                  <Typography
                    component={RouterLink}
                    to="/createStartUpProfile"
                    variant="h6"
                    className={classes.title}
                  >
                    NewStartUp
                  </Typography>
                </React.Fragment>}
                {isLoggedIn && token && user && !isUserProfile &&
                <React.Fragment>
                  <Typography
                    component={RouterLink}
                    to="/createUserProfile"
                    variant="h6"
                    className={classes.title}
                  >
                    CreateProfile
                  </Typography>                 
                </React.Fragment>}
              <Typography
                component={RouterLink}
                to="/"
                variant="h6"
                className={classes.title}
              >
                Find Co-founder
              </Typography>
              <Typography
                component={RouterLink}
                to="/startUpProfile"
                variant="h6"
                className={classes.title}
              >
                Find Startups
              </Typography>
              {isLoggedIn && token && user ? (
                <Button onClick={logout} variant="contained" color="default">
                  Logout
                </Button>
              ) : (
                  <>
                    <Button
                      className={classes.buttons}
                      onClick={() => openModal(<Login />)}
                      variant="contained"
                      color="default"
                    >
                      Log In
                  </Button>
                    <Button
                      className={classes.buttons}
                      onClick={() => openModal(<SignUp />)}
                      variant="contained"
                      color="default"
                    >
                      Sign Up
                  </Button>
                  </>
                )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </Fragment>
  )
}

export default observer(NavBar)
