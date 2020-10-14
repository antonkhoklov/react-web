import React, { useContext, useEffect} from "react"
import { observer } from "mobx-react-lite"
import { Grid, Typography, Container } from "@material-ui/core"
import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core/styles"
import { RootStoreContext } from "../../app/stores/rootStore"
import { IStartUpProfileForHomePage } from "../../app/models/startUp"
import StartUp from "./StartUp"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "100px",
    },
    title: {
      width: "300px",

      [theme.breakpoints.between("sm", "md")]: {
        width:"100%",

      },
    },
    searchBtn: {
      backgroundColor: " #FF8149",
      padding: " 17px 28px",
      border: "none",
      color: "white",
      fontSize: "18px",
      outline: "none",
    },
  })
)

const StartupsProfile: React.FC = () => {
  const classes = useStyles()
  const rootStore = useContext(RootStoreContext)
  const {
    loadStartUpsForHome,
    searchedStartUpsForHome,
    startUpHomeCount,
  } = rootStore.startUpStore

  useEffect(() => {
    loadStartUpsForHome()
  }, [loadStartUpsForHome])

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={6} lg={6} sm={12}>
          <Typography variant="h4" className={classes.title}>
            Startups you might like to join
          </Typography>
        </Grid>
        <Grid
          container
          justify="flex-end"
          alignItems="flex-end"
          item
          xs={6}
          lg={6}
          sm={12}

        >
          <Typography variant="subtitle1" className={classes.title}>
            Industry: Internet & Technology
          </Typography>
        </Grid>
        <Grid container lg={12} sm={12} style={{ marginTop: "10px" }} spacing={4}>
          {searchedStartUpsForHome.map(
            (startup: IStartUpProfileForHomePage) => {
              return (
                <>
                  <Grid
                    container

                    item
                    lg={4}
                    sm={6}
                    key={startup.id}
                  >
                    <StartUp
                      id={startup.id}
                      created={startup.created}
                      name={startup.name}
                      website={startup.website}
                      tagLine={startup.tagLine}
                      logo={startup.logo}
                      socialMedia={startup.socialMedia}
                      startUpLocation={startup.startUpLocation}
                    />
                  </Grid>
                </>
              )
            }
          )}
          <Grid item xs={12}>
            <Grid container item xs={12}>
              <Grid item xs={4}>
                <Typography variant="h3">+ {startUpHomeCount + 126}</Typography>
                <Typography variant="h4">Startups Posts</Typography>
              </Grid>
              <Grid container alignItems="flex-end" item xs={8} sm={8}>
                <button className={classes.searchBtn}>Explore All</button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default observer(StartupsProfile)
