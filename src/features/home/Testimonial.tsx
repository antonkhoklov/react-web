import React from "react"
import { Grid } from "@material-ui/core/"
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles"
import TestimonialCard from "./TestimonialCard"
import { COLORS } from "../../assets/global_styles/colors"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "665px",
      backgroundColor: COLORS.blue,
    },
    headerContainer:{
        height:"150px",
        backgroundColor:"white"
    },
    carouselContainer:{
        position: "relative",
        bottom: "60px",
        height: "578px",

        [theme.breakpoints.between("sm", "md")]: {
            height: "470px",

          },
        [theme.breakpoints.down("xs")]: {
            height: "270px",
          },
    }
  })
)



export default function Testimonial() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container >
        <Grid
          item
          lg={12}
          sm={12}
          xs={12}

          className={classes.headerContainer}
        ></Grid>
        <Grid container item lg={12}>
          <Grid item lg={1}></Grid>
          <Grid
            item
            lg={10}
            sm={11}
            xs={12}
            className={classes.carouselContainer}
          > 
              <TestimonialCard  />
          </Grid>
          <Grid item lg={1} sm={1}></Grid>
        </Grid>
      </Grid>
    </div>
  )
}
