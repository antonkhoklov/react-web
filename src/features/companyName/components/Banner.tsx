import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, createStyles, Typography } from '@material-ui/core';
import Sidebar from './Sidebar';
import { IStartUpProfile, IStartUpSDGs } from '../../../app/models/startUp';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    banner: {
      width: '90%',
      margin: '0 auto',
      [theme.breakpoints.down('xs')]: {
        width: '98%',
      },
    },
    bannerImage:{
      width: '100%',
       height: '100%'
    },
    shareIcon: {
      marginRight: '0.5rem',
    },
    contactBtn: {
      padding: '0.35rem 1.75rem',
      backgroundColor: '#ff8149',
      color: 'white',
      border: 'none',
      width: '175px',
      cursor: 'pointer',
      borderRadius: '0',
    },
    shareBtn: {
      padding: '0.35rem 1.25rem',
      border: 'none',
      backgroundColor: '#fff',
      borderRadius: '0',
      color: '#8E8C95',
    },
    bannerWrapper: {
      position: 'relative',
      [theme.breakpoints.down('xs')]: {
        height: '50vh',
      },
    },
    coverBtn: {
      position: 'absolute',
      bottom: '7%',
      right: '5%',
    },
    adobeImg: {
      height: '4.25vw',
      width: '4.25vw',
      backgroundColor: '#ff0200',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    adobe: {},
    heading1: {
      fontSize: 'calc(14px + 0.5vw)',
      color: '#3b3a30',
      marginLeft: '1.5rem',
      marginTop: '0.5rem',
      fontWeight: 500,
    },
    heading2: {
      fontSize: 'calc(12px + 0.35vw)',
      color: '#ff8149',
    },
    arrange: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 0.5rem',
    },
    heading3: {
      fontSize: 'calc(10px + 0.25vw)',
      color: '#8E8C95',
    },
    iconsWrapper: {
      display: 'flex',
      margin: '1.5rem 0',
    },
    desc: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      margin: '0 0.5rem',
    },
    icon: {
      height: 'calc(14px + 0.35vw)',
      width: 'calc(14px + 0.35vw)',
      marginTop: '0.25rem',
    },
    heading4: {
      fontSize: 'calc(12px + 0.25vw)',
      color: '#3b3a40',
      lineHeight: '1.8'
    },
    heading5: {
      fontSize: 'calc(10px + 0.25vw)',
      color: '#64626a',
    },
    topWrapper: {
      border: '1px solid #e8e7e8',
      borderRadius: '2px',
      padding: '1.25rem',
      backgroundColor: '#fff',
      [theme.breakpoints.up('lg')]: {
        position: 'absolute',
        top: '37%',
        left: '5.575%',
        maxWidth: '54vw',
        minWidth:"840px", 
        minHeight:"500px"
      },
      
    },
    topWrapperChild:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottom: '1px solid #E8E7E8',
      alignItems: 'center',
    },
    topWrapper2: {
      border: '1px solid #e8e7e8',
      borderRadius: '2px',
      padding: '1.25rem',
      backgroundColor: '#fff',
    },
    heading6: {
      fontSize: 'calc(12px + 0.5vw)',
      opacity: '0.8',
      fontWeight: 500,
      marginTop: '1.5rem' 
    },
    section2: {
      marginTop: '2rem',
      width: '90%',
      margin: '0 auto',
      [theme.breakpoints.down('xs')]: {
        width: '98%',
      },
    },
    Input: {
      color: '#b3b1b7',
      width: '22vw',
    },
    searchBtn: {
      padding: '0.8rem 1rem',
      backgroundColor: '#ff8149',
      color: 'white',
      border: 'none',
      fontWeight: 600,
      cursor: 'pointer',
      borderRadius: '0',
    },
    iconClr: {
      color: '#b3b1b7',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    jobHead: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '2rem 0',
    },
    jobAdobeImg: {
      height: '3.25vw',
      width: '3.25vw',
      backgroundColor: '#ff0200',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    jobAdobe: {
      transform: 'scale(0.8)',
    },
    jobTitle: {
      fontSize: 'calc(12px + 0.5vw)',
      color: '#3b3a30',
      marginLeft: '1rem',
      marginTop: '0.5rem',
      fontWeight: 500,
    },
    jobHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    jobWrapper: {
      margin: '2rem 0',
      borderBottom: '1px solid #e8e7e8',
      paddingBottom: '0.5rem',
    },
    jobDesc: {
      fontSize: 'calc(12px + 0.5vw)',
      color: '#3b3a30',
      marginTop: '0.5rem',
      fontWeight: 500,
    },
    heading7: {
      fontSize: 'calc(12px + 0.25vw)',
      color: '#64626A',
      marginLeft: '0.5rem',
      fontWeight: 500,
    },
    page: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '40%',
    },
    currentPage: {
      color: '#3B3A40 ',
    },
    nextPage: {
      color: '#8E8C95',
    },
    pageBtn: {
      color: '#FA6402',
    },
    sideBar :{
      [theme.breakpoints.up('lg')]: {
        minHeight:"500px"
      }
    }
  }),
);


interface IProps {
  startUpProfile: IStartUpProfile
}

const Banner: React.FC<IProps> = ({ startUpProfile }) => {
  const classes = useStyles();

  return (
    <section>
      <Grid container spacing={2} className={classes.banner}>
        <Grid item xs={12}>
          <div className={classes.bannerWrapper}>
            <img
              src={startUpProfile.coverPhoto !== null
                && startUpProfile.coverPhoto!.url !== null
                ? startUpProfile.coverPhoto.url : require('../../../assets/img/Cover.png')}
              alt=""
              className={classes.bannerImage}
            />
            <div className={classes.coverBtn}>
              <Button className={classes.shareBtn}>
                <img
                  src={require('../../../assets/img/ic_Share.png')}
                  alt=""
                  className={classes.shareIcon}
                />
                Share
              </Button>
              <Button className={classes.contactBtn}>Contact</Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={8} >
          <div className={classes.topWrapper}>
            {/* <div className={classes.Adobewrapper}> */}
            <div>
              <div
                className={classes.topWrapperChild}
              >
                <div style={{ display: 'flex' }}>
                  <div className={classes.adobeImg}>
                    <img
                      src={startUpProfile.logo !== null
                        && startUpProfile.logo!.url !== null
                        ? startUpProfile.logo.url : require('../../../assets/img/Adobe logo.png')}
                      alt=""
                      className={classes.adobe}
                    />
                  </div>
                  <Typography className={classes.heading1}>{startUpProfile.name}</Typography>
                </div>
              </div>
            </div>
            {/* 2nd row */}
            <Grid container spacing={8}>
              <Grid item xs={12} sm={6}>
                <div className={classes.iconsWrapper}>
                  <img
                    src={require('../../../assets/img/Industry.png')}
                    alt=""
                    className={classes.icon}
                  />
                  <div className={classes.desc}>
                    <Typography className={classes.heading4}>
                      {startUpProfile.level.industryType}
                    </Typography>
                    <Typography className={classes.heading5}>
                      {startUpProfile!.level.bussinessModelType}
                    </Typography>
                  </div>
                </div>
                <div className={classes.iconsWrapper}>
                  <img
                    src={require('../../../assets/img/location.png')}
                    alt=""
                    className={classes.icon}
                  />
                  <div className={classes.desc}>
                    <Typography className={classes.heading4}>
                      {startUpProfile.startUpLocation.name}
                    </Typography>
                    <Typography className={classes.heading5}>
                      {startUpProfile.startUpLocation.address}
                    </Typography>
                  </div>
                </div>
                <div className={classes.iconsWrapper}>
                  <img
                    src={require('../../../assets/img/ic_Salary.png')}
                    alt=""
                    className={classes.icon}
                  />
                  <div className={classes.desc}>
                    <Typography className={classes.heading4}>Stage</Typography>
                    <Typography className={classes.heading5}>
                      {startUpProfile.level.stageName}
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className={classes.iconsWrapper}>
                  <img
                    src={require('../../../assets/img/website.png')}
                    alt=""
                    className={classes.icon}
                  />
                  <div className={classes.desc}>
                    <Typography className={classes.heading4}>
                      Website
                    </Typography>
                    <Typography className={classes.heading5}>
                      {startUpProfile.website}
                    </Typography>
                  </div>
                </div>
                <div className={classes.iconsWrapper}>
                  <img
                    src={require('../../../assets/img/team.png')}
                    alt=""
                    className={classes.icon}
                  />
                  <div className={classes.desc}>
                    <Typography className={classes.heading4}>
                      Team Members
                    </Typography>
                    <Typography className={classes.heading5}>
                      {startUpProfile.totalTeamMembers}
                    </Typography>
                  </div>
                </div>
                <div className={classes.iconsWrapper}>
                  <img
                    src={require('../../../assets/img/founded.png')}
                    alt=""
                    className={classes.icon}
                  />
                  <div className={classes.desc}>
                    <Typography className={classes.heading4}>
                      Founded
                    </Typography>
                    <Typography className={classes.heading5}>{startUpProfile.founded}</Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
            {/* company desc */}
            <Typography
              className={classes.heading6}
              
            >
              Company Description
            </Typography>
            <Typography
              className={classes.heading4}
            >
              {startUpProfile.description}
              <br />
              <br />
              Mission: {startUpProfile.tagLine}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} lg={4} className={classes.sideBar}>
          <div className={classes.topWrapper2}>
            <Typography className={classes.heading6}>
              Value Proposition
            </Typography>
            <Typography style={{ lineHeight: '1.8' }}>
              {startUpProfile.valueProposition}
            </Typography>
            <img
              src={require('../../../assets/img/banner2.png')}
              alt=""
              style={{ marginTop: '1.5rem' }}
            />
          </div>
        </Grid>
      </Grid>



      {/* SdG */}
      <Grid container spacing={2} className={classes.banner}>
        <Grid item xs={12} md={8}>
          <div className={classes.topWrapper2}>
            <Typography className={classes.heading6}>SDG’s</Typography>

            {startUpProfile.impact ?
              <Typography className={classes.heading4}>
                List based on reports from current and former employees. It may
                not be complete.  </Typography>
              : <Typography className={classes.heading4}>{`${startUpProfile.name}  don't have any SDG / impact`}  </Typography>}

            <Grid container spacing={3}>
              {startUpProfile.sdGs && startUpProfile.sdGs.map((sdg: IStartUpSDGs) => (
                <Grid item xs={12} md={6}>
                  <div className={classes.iconsWrapper}>
                    <img
                      src={require('../../../assets/img/tick.png')}
                      alt=""
                      className={classes.icon}
                    />
                    <div className={classes.desc}>
                      <Typography className={classes.heading4}>
                        {sdg.name}
                      </Typography>
                      <Typography className={classes.heading5}>
                        {sdg.description}
                      </Typography>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>

        {/*side bar*/}
        <Grid item xs={12} sm={4}>
          <Sidebar startUpProfile={startUpProfile}/>
        </Grid>
      </Grid>
    </section>
  );
};

export default Banner;
