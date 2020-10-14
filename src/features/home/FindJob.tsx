import React from "react"
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles"
import { Button, Grid, Typography } from "@material-ui/core/"
import { COLORS } from "../../assets/global_styles/colors.js"
import SearchIcon from "@material-ui/icons/Search"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: COLORS.blue,

    },
    discoverContainer: {},
    title: {
      fontSize: "2.5rem",
      width: "547px",
      [theme.breakpoints.between("sm", "md")]: {
        width:"537px"
      },
    },
    btnContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    btn: {
      backgroundColor: " #FF8149",
      width: "246px",
      height: "72px",
      padding: "20px",
      border: "none",
      color: "white",
      fontSize: "18px",
      outline: "none",
      textTransform: "none",
    },
    searchIcon: {
      position: "relative",
      right: "5px",
    },
  })
)

export default function FindJob() {
  const classes = useStyles()
  return (
    <Grid container item lg={12} className={classes.root} spacing={4}>
      <Grid
        container
        justify="center"
        className={classes.discoverContainer}
        item
        lg={6}
        sm={12}
      >
        <Typography className={classes.title} style={{ fontSize: "2.5rem" }}>
          You’re now discovering co-founders from Denmark
        </Typography>
      </Grid>
      <Grid container justify="center" item lg={6} sm={12}>
        <div className={classes.btnContainer}>
          <Button className={classes.btn}>
            <SearchIcon className={classes.searchIcon} />
            Find Co-Founders
          </Button>
        </div>
      </Grid>
      <Grid item lg={12}></Grid>
      <Grid item lg={12}></Grid>
      <Grid item lg={12}></Grid>
    </Grid>
  )
}
