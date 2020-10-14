import React, { useContext } from 'react';
import {
    Formik,
    Form,
    Field,
    ErrorMessage
} from 'formik';
import { signInSchema } from '../../app/common/formValidations/validationSchemes';
import { IUserFormValues } from '../../app/models/user';
import { RootStoreContext } from '../../app/stores/rootStore';
import { Button, Divider, FormControl, TextField } from '@material-ui/core';
import SocialLogin from '../userAuth/SocialLogin';
import { makeStyles } from '@material-ui/core/styles';
import {COLORS} from '../../assets/global_styles/colors.js';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    modalContainer:{
        width: "600px"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
      },
      orangeLink:{
          color:COLORS.orange,
          cursor: "pointer"
      },
      rememberMe:{
          display: "flex",
          justifyContent: "space-between"
      },
      alignCenter:{
          display: "flex",
          alignItems: "center"
      },
      textFieldStyle: {
        flexGrow: 1,
        flexShrink: 1
      }
  }));

  const StyledButton = withStyles({
    root: {
      background: COLORS.orange,
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      fontSize: "16",
      fontWeight: "bold",
      textTransform: "none",
      margin: "40px 0",
      '&:hover': {
        background: COLORS.orange,
      },
    }
  })(Button);


  const GreenCheckbox = withStyles({
    root: {
        color: COLORS.orange,
        '&$checked': {
          color: COLORS.orange
      },
    },
  })((props) => <Checkbox color="default" {...props} />);
export const Login: React.FC<{}> = () => {
    const rootStore = useContext(RootStoreContext);
    const { login, loading, fbLogin } = rootStore.userStore;
    const classes = useStyles();
    const initialValues: IUserFormValues = { email: '', password: '' };
  


    return (
        <div className={classes.modalContainer}>
            <h1>Hi Again!</h1>
            <p>Don't have an account? <span className={classes.orangeLink}>Sign Up</span></p>
            <Formik
                initialValues={initialValues}
                validationSchema={signInSchema}
                onSubmit={(values, { setSubmitting }) => {
                    const loginValues: IUserFormValues = {
                        email: values.email,
                        password: values.password
                    };
                    login(loginValues);
                    setSubmitting(false);
                }}
            >
                {({ values,
                    handleChange,
                    handleBlur,
                    isSubmitting, }) => {
                    return (
                        <Form style={{width:"100%"}} >
                            <FormControl fullWidth>
                                <Field
                                    type="text"
                                    component={TextField}
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    fullWidth
                                    margin="normal"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email} 
                                    variant="outlined"
                                    className={classes.textFieldStyle}
                                    />
                                <ErrorMessage name="email" component="div" />
                            </FormControl>
                            <FormControl fullWidth	>
                                <Field
                                    type="password"
                                    component={TextField}
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    fullWidth
                                    margin="normal"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password} 
                                    variant="outlined"/>
                                <ErrorMessage name="password" component="div" />
                            </FormControl>
                            <div className={classes.rememberMe}>
                                <div>
                                <FormControlLabel
                                    control={<GreenCheckbox  />}
                                                label="Remember Me?"
                                            />
                                </div>
                                <div className={classes.alignCenter}> 
                                    <span className={classes.orangeLink}>Forgot Password?</span> 
                                </div>
                            </div>
                            <div>
                            <StyledButton fullWidth variant="contained">
                                Sign In
                            </StyledButton>

                            <div style= {{width: "100%",height: "20px", borderBottom: "1px solid #ccc", textAlign: "center" }}  >
                                <span style= {{color:" #ccc", fontSize: "18px", backgroundColor: "#fff", padding: "10px 30px"}} >
                                      Or
                                 </span>
                            </div>




                                <Button disabled={isSubmitting} type="submit" variant="contained" color="primary">Login</Button>
                                <Divider />
                                <SocialLogin loading={loading} fbCallback={fbLogin} />
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};