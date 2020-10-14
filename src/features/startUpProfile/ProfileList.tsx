import React from "react";
import { observer } from 'mobx-react-lite';
import { IStartUpProfileForSearch } from '../../app/models/startUp';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import BusinessOutlinedIcon from "@material-ui/icons/BusinessOutlined";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 1200
    },
    padding: {
      paddingLeft: 15
    },
    large: {
      width: theme.spacing(6),
      height: theme.spacing(6)
    }
  })
);
interface IProps {
  startUpDetails: IStartUpProfileForSearch;
}
const ProfileList: React.FC<IProps> = ({ startUpDetails }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            variant="square"
            alt={startUpDetails.name}
            src="/static/images/avatar/1.jpg"
            className={classes.large}
          />
        }
        title={startUpDetails.name}
      />

      <Grid container className={classes.padding}>
        <Grid item xs={3}>
          <Grid container wrap="nowrap" spacing={1}>
            <Grid item>
              <BusinessOutlinedIcon />
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>{startUpDetails.level.industryType}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container wrap="nowrap" spacing={1}>
            <Grid item>
              <LocationOnOutlinedIcon />
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>{startUpDetails.startUpLocation.address}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid container wrap="nowrap" spacing={1}>
            <Grid item>
              <PersonOutlineOutlinedIcon />
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>{startUpDetails.totalTeamMembers} Team member</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider variant="middle" />
      <CardContent>
        <Typography variant="subtitle1" gutterBottom>
          Company Description
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {startUpDetails.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default observer(ProfileList);
