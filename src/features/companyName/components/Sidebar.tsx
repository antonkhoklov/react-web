import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, createStyles } from '@material-ui/core';
import { IStartUpProfile, IStartUpSharedDoc, IStartUpTeamMember } from '../../../app/models/startUp';
import { Link } from 'react-router-dom';

// const useStyles = makeStyles((theme: Theme) => ({
//   topWrapper2: {
//     border: '1px solid #e8e7e8',
//     borderRadius: '2px',
//     padding: '1.25rem',
//     backgroundColor: '#fff',
//     margin: '0.5rem 0',
//   },
//   dFlex: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   iconWrapper: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     minWidth: '100px',
//   },
//   heading1: {
//     fontSize: 'calc(14px + 0.25vw)',
//     color: '#000',
//     fontWeight: '500',
//   },
//   heading2: {
//     fontSize: 'calc(12px + 0.25vw)',
//     color: '#64626A',
//   },
//   secondary: {
//     padding: '1.5rem',
//   },
// }));





const useStyles = makeStyles((theme: Theme) =>
  createStyles(
    {
      topWrapper2: {
        border: '1px solid #e8e7e8',
        borderRadius: '2px',
        padding: '1.25rem',
        backgroundColor: '#fff',
        margin: '0.5rem 0',
      },
      dFlex: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      iconWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        minWidth: '100px',
      },
      heading1: {
        fontSize: 'calc(14px + 0.25vw)',
        color: '#000',
        fontWeight: 'normal',
      },
      heading2: {
        fontSize: 'calc(12px + 0.25vw)',
        color: '#64626A',
      },
      secondary: {
        padding: '1.5rem',
      },
      imgStyle: {
        cursor: 'pointer'
      },

    }
  ),
);

interface IProps {
  startUpProfile: IStartUpProfile
}

const Sidebar: React.FC<IProps> = ({ startUpProfile }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.topWrapper2}>
        <div className={classes.dFlex}>
          <div>
            <Typography className={classes.heading1}>Our Contact</Typography>
            <Typography className={classes.heading2}>{startUpProfile.email}</Typography>
          </div>
          {startUpProfile.socialMedia &&
            <div className={classes.iconWrapper}>
              {startUpProfile.socialMedia!.instagram &&
                <a href={startUpProfile.socialMedia.instagram}>
                  <img
                    src={require('../../../assets/img/Twitter.png')}
                    alt=""
                    style={{ cursor: 'pointer' }}
                  />
                </a>

              }
              {startUpProfile.socialMedia!.facebook &&

                <a href={startUpProfile.socialMedia.facebook}>
                  <img
                    src={require('../../../assets/img/Facebook.png')}
                    alt=""
                    style={{ cursor: 'pointer' }}
                  />
                </a>

              }
              {startUpProfile.socialMedia!.linkedin &&
                <a href={startUpProfile.socialMedia.linkedin}>
                  <img
                    src={require('../../../assets/img/Linkedin.png')}
                    alt=""
                    className={classes.imgStyle}
                  />
                </a>
              }
            </div>
          }
        </div>
      </div>
      <div className={classes.secondary}>
        <Typography className={classes.heading1}>{startUpProfile.totalTeamMembers}</Typography>
      </div>
      <div className={classes.topWrapper2}>
        {startUpProfile.teamMembers.map((member: IStartUpTeamMember) => (
          <div>
            <Typography className={classes.heading1}>{member.name}</Typography>
            <Typography className={classes.heading2}>
              {`${member.title}  ${member.isOwner ? '(Owner)' : ''}`}
            </Typography>
          </div>
        ))}

      </div>
      {/* <div className={classes.topWrapper2}>
        <div>
          <Typography className={classes.heading1}>Alexandra Sharp</Typography>
          <Typography className={classes.heading2}>Creative Design</Typography>
        </div>
      </div>
      <div className={classes.secondary}>
        <Typography className={classes.heading1}>Others</Typography>
      </div> */}
      <div className={classes.topWrapper2}>
        <div className={classes.dFlex}>
          <div>
            <Typography className={classes.heading1}>Video Pitch</Typography>
          </div>
          <div className={classes.iconWrapper}>
            {startUpProfile!.videoPitch ?
              <img
                src={require('../../../assets/img/tick.png')}
                alt=""
                style={{ cursor: 'pointer' }}
              /> :
              <img
                src={require('../../../assets/img/tick.png')}
                alt=""
                style={{ cursor: 'pointer' }}
              />
            }
          </div>
        </div>
      </div>
      <div className={classes.topWrapper2}>
        <div className={classes.dFlex}>
          <div>
            <Typography className={classes.heading1}>Registered?</Typography>
          </div>
          <div className={classes.iconWrapper}>
            <img
              src={require('../../../assets/img/tick.png')}
              alt=""
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>
      <div className={classes.topWrapper2}>
        <div>
          <Typography className={classes.heading1}>Other Documents</Typography>
          {startUpProfile!.sharedDocs && startUpProfile.sharedDocs.map((doc: IStartUpSharedDoc) => (
            <Typography className={classes.heading2}>{doc.name}</Typography>
          ))}
          <Typography className={classes.heading2}>docs.pdf</Typography>
          <Typography className={classes.heading2}>docs.pdf</Typography>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
