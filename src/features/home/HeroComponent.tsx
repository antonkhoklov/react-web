import React from "react"
import {COLORS} from "../../assets/global_styles/colors.js"
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Grid from "@material-ui/core/Grid"
import { Typography} from "@material-ui/core"
import heroImageDesktop from "../../assets/heroImageDesktop.png"
import heroImageTablet from "../../assets/heroImageTablet.png"
import heroImageMobile from "../../assets/heroImageMobile.png"

import SearchBar from "../startUpProfile/SearchBar"
import Link from "@material-ui/core/Link"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      backgroundColor: "#E6ECF4",
    },
    contentContainer: {
      [theme.breakpoints.down("xs")]: {

      },
    },
    contentWrapper: {
      height: 200,
      position: "relative",
      top: "100px",
      [theme.breakpoints.between("sm", "md")]: {
        top: 42,
        left: 38,
        height: 270,
      },
      [theme.breakpoints.down("xs")]: {
        top: 22,
        textAlign:"center"
      },
    },
    title:{
      [theme.breakpoints.down("xs")]: {

        fontSize:"34px"
      },
    },
    description:{
      fontSize:"12px"

    },
    searchContainer: {
      zIndex: 5,
      [theme.breakpoints.between("sm", "md")]: {
        position: "absolute",
        top: 630,
        backgroundColor: "#F2F2F2",
      },
      [theme.breakpoints.down("xs")]: {
        justifyContent:"center",
        position: "absolute",
        top: 450,
      },
    },
    searchField: {
      [theme.breakpoints.between("sm", "md")]: {
        position: "absolute",
        zIndex: 5,
        left: 38,
      },
    },
    trendingContainer: {
      [theme.breakpoints.between("sm", "md")]: {
        position: "absolute",
        top: 160,
        left: 38,
      },
      [theme.breakpoints.only("xs")]: {
        marginTop:"20px",


      },
    },
    imageContainer: {
      height: 694,
      zIndex: 4,
      [theme.breakpoints.only("xs")]: {
        justifyContent:"center"
      },
    },
    heroImage: {
      height:"694px",
      [theme.breakpoints.between("sm", "md")]: {
        height: 396,
        width: 730,
      },
      [theme.breakpoints.only("xs")]: {
        height: "230px",
        width: "90%",
      },
    },
    linkWrapper:{
      [theme.breakpoints.only("xs")]: {
        justifyContent:"flex-end",
        alignItems:"center"
      },
    },

    link: {
      color: `${COLORS.orange}`,

      [theme.breakpoints.only("xs")]: {
        fontSize:"12px"
      },
      '&:hover': {
        textDecoration:"none"
     },
    },

    links: {
      color: "#64626A",
      backgroundColor: "white",
      padding: "10px",
      margin: "4px",
    },
  })
)

export default function HeroComponent() {

  const theme = useTheme()
  const classes = useStyles()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"))
  let heroImage = isMobile
    ? heroImageMobile
    : isTablet
    ? heroImageTablet
    : heroImageDesktop
  return (
    <Grid container className={classes.root}>
      <Grid
        container
        item
        lg={7}
        sm={12}
        xs={12}
        className={classes.contentContainer}
      >
        <Grid item lg={3}></Grid>
        <Grid item lg={9} sm={10} xs={12} className={classes.contentWrapper}>
          <Typography variant="h2" className={classes.title}>
            Find the Perfect Co-founder or Startup
          </Typography>
          <Typography variant="body1" className={classes.description}>
            Millions of people are searching for jobs, salary information,
            company reviews, and interview questions. See what others are
            looking for on UniFounder today.
          </Typography>
        </Grid>
        <Grid item lg={3}></Grid>
        <Grid container item lg={9} sm={12} xs={12} className={classes.searchContainer}>
          <Grid item lg={12} xs={11} className={classes.searchField}>
            <SearchBar title="Search" />
          </Grid>
          <Grid
            container
            alignItems="center"
            item
            lg={12}
            sm={10}
            xs={11}

            className={classes.trendingContainer}
          >
            <Grid container item lg={4} sm={4} xs={12}>
                <Grid item lg={12} sm={12} xs={7} >

              <Typography variant="h6">Trending Searches</Typography>
              </Grid>
              <Grid container item xs={5} className={classes.linkWrapper}>

              <Link className={classes.link}>View more ></Link>
              </Grid>
            </Grid>
            <Grid container item lg={8} sm={8}>
              <Link className={classes.links}>App Development</Link>
              <Link className={classes.links}>Programming</Link>
              <Link className={classes.links}>Creative Desing</Link>
              <Link className={classes.links}>Supply Chain </Link>
              <Link className={classes.links}>Marketing</Link>
              <Link className={classes.links}>Sales</Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        justify="flex-end"
        item
        lg={5}
        sm={12}
        xs={12}
        className={classes.imageContainer}
      >
        <img src={heroImage} className={classes.heroImage} alt=''/>
      </Grid>
    </Grid>
  )
}
