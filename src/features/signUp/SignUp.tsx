import React, { useContext } from 'react';
import {
    Formik,
    Form,
    Field,
    ErrorMessage
} from 'formik';
import { signUpSchema } from '../../app/common/formValidations/validationSchemes';
import { IUserFormValues } from '../../app/models/user';
import { RootStoreContext } from '../../app/stores/rootStore';
import { Button, Divider, FormControl, TextField } from '@material-ui/core';
import SocialLogin from '../userAuth/SocialLogin';

export const SignUp: React.FC<{}> = () => {
    const rootStore = useContext(RootStoreContext);
    const { register, fbLogin, loading } = rootStore.userStore;

    const initialValues: IUserFormValues = { email: '', password: '', firstname: '', lastname: ''};

    return (
        <div>
            <h1>SignUp to UniFounder</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={signUpSchema}
                onSubmit={(values, { setSubmitting }) => {
                    register(values);
                    setSubmitting(false);
                }}
            >
                {({ values,
                    handleChange,
                    handleBlur,
                    isSubmitting, }) => {
                    return (
                        <Form>
                            <FormControl fullWidth>
                                <Field
                                    type="text"
                                    component={TextField}
                                    id="firstname"
                                    name="firstname"
                                    placeholder="Firstname"
                                    fullWidth
                                    margin="normal"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.firstname} />
                                <ErrorMessage name="firstname" component="div" />
                            </FormControl>
                            <FormControl fullWidth>
                                <Field
                                    type="text"
                                    component={TextField}
                                    id="lastname"
                                    name="lastname"
                                    placeholder="Lastname"
                                    fullWidth
                                    margin="normal"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lastname} />
                                <ErrorMessage name="lastname" component="div" />
                            </FormControl>                            
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
                                    value={values.email} />
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
                                    value={values.password} />
                                <ErrorMessage name="password" component="div" />
                            </FormControl>
                            <div>
                                <Button disabled={isSubmitting} type="submit" variant="contained" color="primary">SignUp</Button>
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