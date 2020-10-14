import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Links from '@material-ui/core/Link';
import css from './Footer.module.css';
import { Grid, Typography } from '@material-ui/core';
import FooterStandardLogo from '../../../assets/img/LogoPNG/Logo Colour - Standards.png';
import FacebookIcon from '../../../assets/img/socialIcons/facebook-f-brands.svg';
import TwitterIcon from '../../../assets/img/socialIcons/twitter-brands.svg';
import LinkedinIcon from '../../../assets/img/socialIcons/linkedin-in-brands.svg';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  homepageFooter:{
    padding:20,
    '& p':{
      marginTop:'25px',
      marginBottom:'20px',
      fontWeight:'500',
      fontSize:'1rem',
      color:'#6c6c6c',},
    '& a':{
      display:'block',
      padding:'5px 5px 5px 0',
      color:'#6c6c6c',}
  },
  address:{
    '& img':{
        height:70,
        width:'80%',},
    '& p':{
      margin: '5px 5px  0 30px',
      fontWeight:'normal',
      fontSize:'0.938rem',
    },
    '& a':{
      display:'inline',
    },
  },
  socialIcons:{
    '& img':{
    height:'20px!important',
    width:'20px!important',
    margin:'20px 0 0 35px',},
  },
  footerNavigation:{
    height:'50px',
    marginTop:50,
    borderTop: '1px solid rgba(31,36,48,.1)',
    '& a':{
      marginTop:10,
      textTransform: 'revert',
      wrap:'nowrap',
      fontSize:'0.75rem',
      marginLeft:40,
      padding: '8px 2px',},
    '& p':{
      fontWeight:'normal',
      fontSize:'0.75rem',
      marginLeft:40,
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid container className={classes.homepageFooter}>
      <Grid container justify="space-around" alignItems="flex-start" >
        <Grid item xs={12} md={3} lg={2} className={classes.address}>
          <div><img  src={FooterStandardLogo} alt="logo"/></div>
          <Typography>Porcelænshaven 26, 2nd floor, 2000 Frederiksberg, Danmark</Typography>
          <Grid item direction="row"  className={classes.socialIcons}>
            <Links href="#"><img  src={TwitterIcon} alt="Twitter" /></Links>
            <Links href="#"><img  src={FacebookIcon} alt="Facebook"/></Links>
            <Links href="#"><img  src={LinkedinIcon} alt="LinkedIn"/> </Links>
          </Grid>
          </Grid>
          <Grid item  xs={6} md={2} lg={2}>
            <Typography variant="body1" >Company </Typography>
              <Links href="/" variant="body2" underline="none">About Us </Links>
              <Links href="/" variant="body2" underline="none">Careers </Links>
              <Links href="/" variant="body2" underline="none">Team</Links>
          </Grid>
          <Grid item xs={6} md={2} lg={2}>
              <Typography variant="body1" >Quick Links </Typography>
              <Links href="/" variant="body2" underline="none">FAQ </Links>
              <Links href="/" variant="body2" underline="none">Customer Support </Links>
          </Grid>
          <Grid item xs={6} md={2} lg={2}>
              <Typography variant="body1" >Partnerships </Typography>
              <Links href="/" variant="body2" underline="none">Partners</Links>
              <Links href="/" variant="body2" underline="none">Sponsership </Links>
          </Grid>
          <Grid item xs={6} md={2} lg={2}>
              <Typography variant="body1" >Learn </Typography>
              <Links href="/" variant="body2" underline="none">Blog</Links>
              <Links href="/" variant="body2" underline="none">Events</Links>
          </Grid>
        </Grid>
        <Grid container className={classes.footerNavigation} alignItems="center">
          <Grid item xs={12} sm={2} >
            <Typography variant="body2">&copy; 2020 UniFounder </Typography>
          </Grid>
          <Grid container xs={12} sm={6}  direction="row" >
            <Tab component={Link} to="/"  label="Terms of Services" />
            <Tab component={Link} to="/"  label="Privacy Policy" />
            <Tab component={Link} to="/"  label="Trust & Safety" />
          </Grid>
        </Grid>
    </Grid>
  );
}
