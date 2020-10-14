import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '30ch',
      },
    },
    formControl: {
      margin: theme.spacing(1),
      width: '30ch',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '30ch',
    },
    switch: {
      margin: theme.spacing(1),
      width: '22ch',
    },
  })
);

export default function SideBar() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [post, setPost] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          multiline
          id="outlined-basic"
          label="Search by keyword"
          variant="outlined"
        />
      </form>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Industry</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="industry"
          value={age}
          onChange={handleChange}
          label="Industry"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Advertising'}>Advertising</MenuItem>
          <MenuItem value={'Agriculture'}>Agriculture</MenuItem>
          <MenuItem value={'Entertainment'}>Entertainment</MenuItem>
          <MenuItem value={'Fashion'}>Fashion</MenuItem>
          <MenuItem value={'Hospitality'}>Hospitality</MenuItem>
          <MenuItem value={'Education'}>Education</MenuItem>
          <MenuItem value={'Construction'}>Construction</MenuItem>
          <MenuItem value={'Information'}>Information</MenuItem>
          <MenuItem value={'Music'}>Music</MenuItem>
          <MenuItem value={'Media'}>Media</MenuItem>
          <MenuItem value={'Publishing'}>Publishing</MenuItem>
          <MenuItem value={'IT'}>IT</MenuItem>
          <MenuItem value={'Service'}>Service</MenuItem>
          <MenuItem value={'Technology'}>Technology</MenuItem>
          <MenuItem value={'Telecom'}>Telecom</MenuItem>
          <MenuItem value={'Robotics'}>Robotics</MenuItem>
          <MenuItem value={'Food & Drinks'}>Food & Drinks</MenuItem>
          <MenuItem value={'Financial Services'}>Financial Services</MenuItem>
          <MenuItem value={'Cosmetics'}>Cosmetics</MenuItem>
          <MenuItem value={'Real Estate'}>Real Estate</MenuItem>
          <MenuItem value={'Tourism'}>Tourism</MenuItem>
          <MenuItem value={'Mechnical Engineering'}>
            Mechnical Engineering
          </MenuItem>
          <MenuItem value={'Textiles'}>Textiles</MenuItem>
          <MenuItem value={'Utilities'}>Utilities</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Stage</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="stage"
          value={age}
          onChange={handleChange}
          label="Stage"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <form className={classes.container} noValidate>
        <TextField
          id="datetime"
          label="Date time"
          type="datetime-local"
          variant="outlined"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          multiline
          id="location"
          label="Location"
          variant="outlined"
        />
        <FormHelperText>Within 100 miles</FormHelperText>
      </form>
      <FormControlLabel
        className={classes.switch}
        control={
          <Switch
            checked={post.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Contains posts"
        labelPlacement="start"
      />
    </div>
  );
}
