import React from "react"
import Card from "@material-ui/core/Card"
import Grid from "@material-ui/core/Grid"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"

import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"

import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles"
import { IStartUpProfileForHomePage } from "../../app/models/startUp"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 360,

      boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
    },
    avatar: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
    titleContainer: {
      marginLeft: 0,
    },
    title: {
      fontSize: 20,
      marginBottom: 10,
    },
    iconContainer: {
      marginRight: 3,
    },
    tagLine: {
      marginTop: "30px",
      fontSize: 14,
    },
    location: {
      fontSize: "10px",
    },
    pos: {
      marginBottom: 12,
    },
    color: {
      color: " #FF8149",
    },
  })
)

const StartUp: React.FC<IStartUpProfileForHomePage> = ({
  created,
  name,
  website,
  tagLine,
  logo,
  socialMedia,
  startUpLocation,
}) => {
  const classes = useStyles()
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container>
          <Grid container item xs={12}>
            <Grid item lg={3} sm={3} xs={3}>
              <Avatar
                className={classes.avatar}
                variant="square"
                src="/static/images/avatar/1.jpg"
              ></Avatar>
            </Grid>
            <Grid container item lg={9} sm={9} xs={9} justify="space-around">
              <Grid item xs={11}>
                <Typography className={classes.title}>{name}</Typography>
              </Grid>
              <Grid container item xs={11} alignItems="center">
                <Grid
                  container
                  item
                  xs={1}
                  alignItems="center"
                  className={classes.iconContainer}
                >
                  <LocationOnOutlinedIcon fontSize="small" />
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="body1" className={classes.location}>
                    {startUpLocation.address}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={11} alignItems="center">
                <Grid
                  container
                  item
                  xs={1}
                  alignItems="center"
                  className={classes.iconContainer}
                >
                  <AccessTimeIcon fontSize="small" />
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="body1" className={classes.location}>
                    Tech
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.tagLine}
                >
                  {tagLine}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis maxime ipsa possimus nemo itaque asperiores
                  veritatis velit ducimus perspiciatis eligendi! veritatis velit
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container justify="space-around">
          <Grid item xs={11}>
            <Typography className={classes.color}>5 job openings</Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}

export default StartUp
