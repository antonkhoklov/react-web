import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

import { Container, Grid, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      top: "5rem",
    },
    large: {
      height: "202px",
    },
    circle: {
      fontSize: 20,
      textAlign: "center",
      border: "1px solid #FF8149",
      color: "#FF8149",
      borderRadius: "50%",
      width: "30px",
    },
    color: {
      color: "#FA6402",
    },
  })
)

export default function GetStart() {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <Grid container xs={12} justify="center" className={classes.large}>
        <Grid container item xs={11}>
          <Grid item xs={12}>
            <Typography variant="h5">How Unifounder Works</Typography>
          </Grid>
        </Grid>
        <Grid container justify="space-between" item xs={11}>
          <Grid container item sm={4} lg={3} xs={12}>
            <Grid container item lg={2} sm={3} xs={2} alignItems="center">
              <Typography variant="body1" className={classes.circle}>
                1
              </Typography>
            </Grid>
            <Grid container item lg={10} xs={10} sm={9} alignItems="center">
              <Typography variant="body1">Create your profile</Typography>
            </Grid>
          </Grid>
          <Grid container item sm={4} lg={3} xs={12}>
            <Grid container item sm={3} lg={2} xs={2} alignItems="center">
              <Typography variant="body1" className={classes.circle}>
                2
              </Typography>
            </Grid>
            <Grid container item sm={9} lg={10} xs={10} alignItems="center">
              <Typography variant="body1">Find your partner</Typography>
            </Grid>
          </Grid>
          <Grid container item sm={4} lg={3} xs={12}>
            <Grid container item sm={3} lg={2} xs={2} alignItems="center">
              <Typography variant="body1" className={classes.circle}>
                3
              </Typography>
            </Grid>
            <Grid container item sm={9} lg={10} xs={10} alignItems="center">
              <Typography variant="body1">Get started</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
