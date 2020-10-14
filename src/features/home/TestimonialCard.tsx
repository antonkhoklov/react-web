import React, { useState } from "react"
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles"

import { Card, CardContent, Typography, Grid, Collapse } from "@material-ui/core/"

import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"
import title from "../../assets/img/_.png"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "478px",
      [theme.breakpoints.between("sm", "md")]: {
        height: "470px",
      },
      [theme.breakpoints.down("xs")]: {
        height: "290px",
      },
    },
    carouselImage: {
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      position: "relative",
      transition: "background-image 0.5s ease-in-out",
      [theme.breakpoints.between("sm", "md")]: {
        backgroundSize: "100% 100%",
        height: "470px",
      },
      [theme.breakpoints.down("xs")]: {
        height: "290px",
      },
    },
    buttonsContainer: {
      position: "absolute",
      left: "97.8%",
      top: "45%",
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.between("sm", "md")]: {
        left: "96.8%",
        top: "40%",
      },
      [theme.breakpoints.down("xs")]: {
        left: 0,
        top: "190%",
        justifyContent: "center",
        flexDirection: "row-reverse",
        zIndex: 2,
        width: "100%",
      },
    },
    button: {
      backgroundColor: "#F5F5F5",
      width: "50px",
      height: "50px",
      marginBottom: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      [theme.breakpoints.down("xs")]: {
        marginLeft: "10px",
      },
    },

    cardWrapper: {
      height: "522px",
      width: "520px",
      position: "relative",
      left: "50px",
      top: "50px",
      [theme.breakpoints.between("sm", "md")]: {
        width: "626px",
        height: "372px",
        left: "30px",
        top: "400px",
      },
      [theme.breakpoints.down("xs")]: {
        width: "350px",
        height: "354px",
        top: "260px",
        left: "12px",
        textAlign: "center",
      },
    },

    cardContent: {
      padding: "40px",
      [theme.breakpoints.down("xs")]: {
        padding: "10px",
      },
    },
    cardFooter: {
      position: "absolute",
      bottom: "40px",
      display: "flex",
      [theme.breakpoints.between("sm", "md")]: {
        bottom: "20px",
      },
      [theme.breakpoints.down("xs")]: {
        bottom: "70px",
        fontSize: "14px",
        width: "100%",
        justifyContent: "center",
      },
    },
    footerText: {
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
    title: {},
    text: {
      fontSize: "32px",
      [theme.breakpoints.between("sm", "md")]: {
        fontSize: "25px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "18px",
      },
    },
    pos: {
      marginBottom: 12,
    },
  })
)
const testimonial = [
  {
    name: "James Lyons",
    company: "Startup 1",
    id: 2,
    img: "https://cdn.mos.cms.futurecdn.net/ahevYTh9pWRzkNPF85MQhb.jpg",
    text:
      "Finding a new co-founder is scary, but using UniFounder to find a new  within one week of searching  has been such a blessing to me and my startup!",
  },
  {
    name: "James Lyons",
    company: "Startup 2",
    id: 3,
    img: "https://cdn.mos.cms.futurecdn.net/X5TyA8uvkGXoNyjFzxcowS.jpg",
    text: "Lorem ipsum dolor sit ametsad consectetur, adipisicing elit. E",
  },
  {
    name: "James Lyons",
    company: "Startup 3",
    id: 4,
    img:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6374/6374329_sd.jpg",
    text:
      "Loraet consectetur, adipisicing elit. Error dicta suscipit pariatur.",
  },
  {
    name: "James Lyons",
    company: "Startup 4",
    id: 5,
    img:
      "https://cdn.pocket-lint.com/r/s/1200x/assets/images/149624-laptops-review-hands-on-microsoft-surface-laptop-3-initial-review-more-power-and-a-new-15-inch-version-too-image1-fer2icaenx.jpg",
    text: "Lorem ipsuicing elit. Error dicta suscipit pariatur",
  },
]

const TestimonialCard: React.FC = () => {
  const [next, setNext] = useState(0)

  const nextTestiomonial = () => {
    next === testimonial.length - 1 ? setNext(0) : setNext(next + 1)
  }
  const prevTestiomonial = () => {
    next === 0 ? setNext(testimonial.length - 1) : setNext(next - 1)
  }
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      <Grid
        item
        lg={12}
        sm={12}
        xs={12}
        className={classes.carouselImage}
        style={{
          backgroundImage: `url(${testimonial[next].img})`,

        }}
      >
        <div className={classes.buttonsContainer}>
          <div onClick={nextTestiomonial} className={classes.button}>
            <NavigateNextIcon />
          </div>
          <div className={classes.button} onClick={prevTestiomonial}>
            <NavigateBeforeIcon />
          </div>
        </div>
        <Card className={classes.cardWrapper}>
          <CardContent className={classes.cardContent}>
            <Typography className={classes.title}>
              <img src={title} />
            </Typography>

            <Typography className={classes.text}>
              {testimonial[next].text}
            </Typography>

            <div className={classes.cardFooter}>
              <Typography
                className={classes.footerText}
                style={{ color: "orange" }}
                variant="body1"
              >
                {testimonial[next].name},
              </Typography>
              <Typography
                className={classes.footerText}
                style={{ color: "grey" }}
                variant="body1"
              >
                {testimonial[next].company}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* 
        <div
          style={{
            // position: "absolute",
            // left: "97.8%",
            // top: "45%",
            // display: "flex",
            // flexDirection: "column",
            // backgroundColor: "black",
          }}
        >
          <div
            onClick={nextTestiomonial}
            style={{
              backgroundColor: "white",
              width: "50px",
              height: "50px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <NavigateNextIcon />
          </div>
          <div
            onClick={prevTestiomonial}
            style={{
              backgroundColor: "white",
              width: "50px",
              height: "50px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <NavigateBeforeIcon />
          </div>
        </div>
        <Card
          style={{
            height: "522px",
            width: "520px",
            position: "relative",
            left: "50px",
            top: "50px",
          }}
        >
          <CardContent className={classes.cardContent}>
            <Typography className={classes.title}>
              <img src={title} />
            </Typography>
            <Typography style={{ fontSize: "32px" }}>
              {testimonial[next].text}
            </Typography>
            <div
              style={{ position: "absolute", bottom: "40px", display: "flex" }}
            >
              <Typography style={{ color: "orange" }} variant="body1">
                {testimonial[next].name},
              </Typography>
              <Typography style={{ color: "grey" }} variant="body1">
                {testimonial[next].company}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid> */}
    </Grid>
  )
}
export default TestimonialCard
