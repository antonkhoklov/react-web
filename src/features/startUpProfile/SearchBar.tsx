import React from 'react';
import { makeStyles, Theme, createStyles,useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Button from '@material-ui/core/Button';
import { history } from "../..";



interface IProps{
  title:string
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '10px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 800,
      borderRadius:"0",
      [theme.breakpoints.between("sm", "md")]: {
        width:700
      },
      [theme.breakpoints.only("xs")]: {
        flexDirection:"column",
        width:343
      },

    },
    searchWrapper:{
      width:360,
      [theme.breakpoints.only("xs")]: {
        display:"flex",
        width:345
      },
    },
    locationWrapper:{
      width:360,
      [theme.breakpoints.only("xs")]: {
        display:"flex",
        width:345
      },
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 32,
      margin: 4,
      [theme.breakpoints.only("xs")]: {
        width:"97%",
        height:1

      },
    },
    btnWrapper:{
      [theme.breakpoints.only("xs")]: {

        width:"100%"
      },
    },
    buttons:{
      backgroundColor:"white",
      boxShadow:"none",
      borderRadius:"0"
    },
    button: {
      margin: theme.spacing(1),
      backgroundColor:"#FF8149",
      color:"white",
      borderRadius:"0",
      [theme.breakpoints.only("xs")]: {
        padding:"10px 130px"
      },
    },
  })
);

const SearchBar:React.FC<IProps> = ({title})=> {
  const classes = useStyles();
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))
  const orientation = isMobile?"horizontal":"vertical"
  return (
    <>
   <Button
        variant="contained"
        className={classes.buttons}
      >
        CO-FOUNDERS
      </Button>
   <Button
        variant="contained"
        className={classes.buttons}
      >
        START-UPS
      </Button>
    <Paper component="form" className={classes.root}>
      <div className={classes.searchWrapper}>
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Company name"
      />
      </div>
      <Divider className={classes.divider} orientation={orientation} />
      <div className={classes.locationWrapper}>

      <IconButton className={classes.iconButton} aria-label="directions">
        <LocationOnOutlinedIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="City, state or zip"
      />
      </div>
      <div className={classes.btnWrapper}>

      <Button
        type="submit"
        variant="contained"
        className={classes.button}
        onClick={()=> history.push(`/startUpProfile/9de748cc-7670-4c86-96a3-948b7570d7c9`)}
      >
        {title}
      </Button>
      </div>
    </Paper>
    </>
  );
}

export default SearchBar