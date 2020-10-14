import React from "react"
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles"

import { Container, Link, Typography, Grid } from "@material-ui/core/"
import clientImg from "../../assets/img/Clients.png"
import { COLORS } from "../../assets/global_styles/colors.js"
import uber from "../../assets/img/Uber.png"
import shopify from "../../assets/img/Shopify.png"
import airbnb from "../../assets/img/Airbnb.png"
import microsoft from "../../assets/img/microsoft.png"
import ge from "../../assets/img/ge.png"
import intel from "../../assets/img/Intel.png"
import google from "../../assets/img/google.png"
import philips from "../../assets/img/Philips.png"
import automatic from "../../assets/img/automatic.png"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    clientHeader: {
      backgroundColor: COLORS.blue,
      height: "150px",
      [theme.breakpoints.between("sm", "md")]: {
        height: "350px",
        backgroundColor: COLORS.blue,
      },
    },
    imageContainer: {
      [theme.breakpoints.between("sm", "md")]: {
        position: "relative",
        order: 2,
        bottom: "330px",
        display: "flex",
        justifyContent: "center",
      },
    },
    banner: {
      width: "95%",
      height: "90%",
    },

    contentWrapper: {
      backgroundColor: COLORS.blue,
    },
    headerContent: {
      [theme.breakpoints.between("sm", "md")]: {
        order: 1,
      },
    },
    title: {
      position: "relative",
      top: "60px",
      left: "30px",
      width: "583px",
      fontSize: "2.625rem",
      [theme.breakpoints.between("sm", "md")]: {
        top: 0,
      },
    },
    subTitle: {
      position: "relative",
      bottom: "60px",
      left: "30px",
      width: "384px",
      [theme.breakpoints.between("sm", "md")]: {
        bottom: 0,
      },
    },
    link: {
      position: "relative",
      bottom: "200px",
      left: "30px",
      color: COLORS.orange,
      "&:hover": {
        textDecoration: "none",
        cursor: "pointer",
      },
      [theme.breakpoints.between("sm", "md")]: {
        bottom: 0,
      },
    },
    cardContainer: {
      position: "relative",
      bottom: "322px",
      left: "468px",
      [theme.breakpoints.between("sm", "md")]: {
        left: 0,
        bottom: 0,
        top: 510,
      },
    },
    cardItem: {
      background: "white",
      height: "227px",
      textAlign: "center",
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
      [theme.breakpoints.between("sm", "md")]: {
        height: "169px",
      },
    },
    marketingContainer: {
      position: "relative",
      textAlign: "center",
      bottom: "130px",
      [theme.breakpoints.between("sm", "md")]: {
        bottom: 0,
        top:"600px"
      },
    },
  })
)

export default function Clients() {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid className={classes.clientHeader} item lg={12} sm={12}></Grid>
      <Grid container className={classes.contentWrapper}>
        <Grid item lg={6} sm={12} className={classes.imageContainer}>
          <img className={classes.banner} src={clientImg} alt="" />
        </Grid>

        <Grid container item lg={6}>
          <Grid container item lg={12} className={classes.headerContent}>
            <Grid item lg={12}>
              <Typography className={classes.title}>
                Companies we’ve helped to find their new co-founder
              </Typography>
            </Grid>
            <Grid item lg={12} sm={12}>
              <Typography className={classes.subTitle} variant="body1">
                We have end-to-end solutions that can keep up with you and your
                standards.
              </Typography>
            </Grid>
            <Grid item lg={12} sm={12}>
              <Link className={classes.link}>Explore more </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          className={classes.cardContainer}
          container
          item
          sm={12}
          lg={8}
          justify="space-around"
        >
          <Grid
            className={classes.cardItem}
            container
            justify="center"
            alignContent="center"
            item
            sm={3}
            lg={3}
          >
            <Typography>
              <img src={uber} />
            </Typography>
            <Typography style={{ marginTop: "20px" }} variant="body2">
              We have end-to-end solutions that can keep up with you and your
              standards.
            </Typography>
          </Grid>
          <Grid
            className={classes.cardItem}
            container
            justify="center"
            alignContent="center"
            item
            sm={3}
            lg={3}
          >
            <Typography>
              <img src={shopify} />
            </Typography>
            <Typography style={{ marginTop: "20px" }} variant="body2">
              We have end-to-end solutions that can keep up with you and your
              standards.
            </Typography>
          </Grid>
          <Grid
            className={classes.cardItem}
            container
            justify="center"
            alignContent="center"
            item
            sm={3}
            lg={3}
          >
            <Typography>
              <img src={airbnb} />
            </Typography>
            <Typography style={{ marginTop: "20px" }} variant="body2">
              We have end-to-end solutions that can keep up with you and your
              standards.
            </Typography>
          </Grid>
        </Grid>

        <Grid className={classes.marketingContainer} container justify="center">
          <Grid container justify="center" item lg={8} sm={8} spacing={2}>
            <Grid item container justify="center" alignItems="center" lg={2} sm={4}>
              <img src={microsoft} alt="" />
            </Grid>
            <Grid item container justify="center" alignItems="center" lg={2} sm={4}>
              <img src={google} alt="" />
            </Grid>
            <Grid item container justify="center" alignItems="center" lg={2} sm={4}>
              <img src={ge} alt="" />
            </Grid>
            <Grid item container justify="center" alignItems="center" lg={2} sm={4}>
              <img src={automatic} alt="" />
            </Grid>
            <Grid item container justify="center" alignItems="center" lg={2} sm={4}>
              <img src={philips} alt="" />
            </Grid>
            <Grid item container justify="center" alignItems="center" lg={2} sm={4}>
              <img src={intel} alt="" />
            </Grid>
          </Grid>
            <Grid

              container
              justify="center"
              item
              lg={8}
              style={{marginTop:"30px"}}
            >
              <Typography variant="body2">
                Some of our partners that trust UniFounder.
              </Typography>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
