import React, { useContext, useEffect, useState } from 'react';
import {
  Formik,
  Form,
  Field,
  ErrorMessage, FieldArray
} from 'formik';
import {
  DatePicker
} from 'formik-material-ui-pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { ISkill, ITitle, IUserProfileFormValues } from '../../app/models/userProfile';
import { RootStoreContext } from '../../app/stores/rootStore';
import { Button, FormControl, InputLabel, MenuItem, TextField } from '@material-ui/core';
import { Select } from 'formik-material-ui';
import { observer } from 'mobx-react-lite';


const UserProfileForm = () => {
  const rootStore = useContext(RootStoreContext);
  const { isUserProfile } = rootStore.userStore;
  const { createUserProfile,  fetchTitle,  selectedSkills, getAllTitles, setSkills } = rootStore.userProfileStore;

  const [selectedTitleId, setSelectedTitleId] = useState('');

  const initialValues: IUserProfileFormValues = {
    isAvailableForFreelance: false, titleId: '', description: '', birthday: new Date(), gender: '',
    skills: [],
    location: {
      name: '',
      address: '',
      country: 'Denmark',
      latitude: 55.612919,
      longitude: 12.363130
    },
    resumes: [{ companyName: '', companyDescription: '', position: '', start: new Date(), end: new Date(), isCurrent: false }]
  };

  useEffect(() => {
    fetchTitle();
  }, [fetchTitle])


  useEffect(() => {
    if (selectedTitleId !== null) {
      setSkills(selectedTitleId);
    }
  }, [selectedTitleId, setSkills])


  const titleItems = getAllTitles.length > 0 ?
    getAllTitles.map((t: ITitle) => (
      <MenuItem key={t.id} value={t.id}>{t.name}</MenuItem>
    ))
    : null;

  return (
    <React.Fragment>
      {!isUserProfile &&
        <div style={{width: 600, margin: 'auto'}}>
          <h1>SignUp to UniFounder (This form is not working)</h1>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Formik
              initialValues={initialValues}
              onSubmit={(values, { setSubmitting }) => {
                createUserProfile(values);               
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
                      <InputLabel htmlFor="isAvailableForFreelance">Is Freelance</InputLabel>
                      <Field
                        type="checkbox"
                        component={TextField}
                        id="isAvailableForFreelance"
                        name="isAvailableForFreelance"
                        placeholder="isAvailableForFreelance"
                        margin="normal"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.isAvailableForFreelance} />
                      <ErrorMessage name="isAvailableForFreelance" component="div" />
                    </FormControl>
                    <FormControl fullWidth>
                      <InputLabel htmlFor="titleId">Title</InputLabel>
                      <Field
                        name="titleId"
                        component={Select}
                        onChange={(e: any) => {
                          handleChange(e);
                          const v = e.target.value as string;
                          setSelectedTitleId(v);
                        }}
                        inputProps={{
                          id: "titleId",
                          onBlur: handleBlur,
                          multiple: false
                        }}
                      >
                        {titleItems}
                      </Field>
                    </FormControl>
                    <FormControl fullWidth>
                      <InputLabel htmlFor="skills">Skills</InputLabel>
                      <Field
                        name="skills"
                        component={Select}
                        inputProps={{
                          id: "skills",
                          multiple: true,
                        }}
                      >
                        {selectedSkills && selectedSkills!.map((t: ISkill) => (
                          <MenuItem key={t.id} value={t.id}>{t.name}</MenuItem>
                        ))}
                      </Field>
                    </FormControl>
                    <FormControl fullWidth>
                      <Field
                        type="text"
                        component={TextField}
                        id="location.name"
                        name="location.name"
                        placeholder="Place Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.location.name} />
                      <ErrorMessage name="name" component="div" />
                    </FormControl>
                    <FormControl fullWidth>
                      <Field
                        type="text"
                        component={TextField}
                        id="location.address"
                        name="location.address"
                        placeholder="Address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.location.address} />
                      <ErrorMessage name="address" component="div" />
                    </FormControl>
                    <FieldArray name="resumes">
                      {({ insert, remove, push }) => (
                        <div>
                          {values.resumes.length > 0 &&
                            values.resumes.map((resume, index) => (
                              <div className="row" key={index}>
                                <div className="col">
                                  <label htmlFor={`resumes.${index}.companyName`}>Company Name</label>
                                  <Field
                                    name={`resumes.${index}.companyName`}
                                    placeholder="Microsoft"
                                    type="text"
                                  />
                                  <ErrorMessage
                                    name={`resumes.${index}.companyName`}
                                    component="div"
                                    className="field-error"
                                  />
                                </div>
                                <div className="col">
                                  <label htmlFor={`resumes.${index}.companyDescription`}>Description</label>
                                  <Field
                                    name={`resumes.${index}.companyDescription`}
                                    placeholder="Description"
                                    type="text"
                                  />
                                  <ErrorMessage
                                    name={`resumes.${index}.companyDescription`}
                                    component="div"
                                    className="field-error"
                                  />
                                </div>
                                <div className="col">
                                  <label htmlFor={`resumes.${index}.position`}>Position</label>
                                  <Field
                                    name={`resumes.${index}.position`}
                                    placeholder="position"
                                    type="text"
                                  />
                                  <ErrorMessage
                                    name={`resumes.${index}.position`}
                                    component="div"
                                    className="field-error"
                                  />
                                </div>
                                <div className="col">
                                  <label htmlFor={`resumes.${index}.start`}>Start</label>
                                  <Field
                                    name={`resumes.${index}.start`}
                                    component={DatePicker}
                                    placeholder="start"
                                  />
                                  <ErrorMessage
                                    name={`resumes.${index}.start`}
                                    component="div"
                                    className="field-error"
                                  />
                                </div>
                                <div className="col">
                                  <label htmlFor={`resumes.${index}.end`}>End</label>
                                  <Field
                                    name={`resumes.${index}.end`}
                                    placeholder="end"
                                    component={DatePicker}
                                  />
                                  <ErrorMessage
                                    name={`resumes.${index}.end`}
                                    component="div"
                                    className="field-error"
                                  />
                                </div>
                                <div className="col">
                                  <label htmlFor={`resumes.${index}.isCurrent`}>Current</label>
                                  <Field
                                    name={`resumes.${index}.isCurrent`}
                                    placeholder="isCurrent"
                                    type="checkbox"
                                  />
                                  <ErrorMessage
                                    name={`resumes.${index}.isCurrent`}
                                    component="div"
                                    className="field-error"
                                  />
                                </div>
                                <div className="col">
                                  <button
                                    type="button"
                                    className="secondary"
                                    onClick={() => remove(index)}
                                  >
                                    X
                                </button>
                                </div>
                              </div>
                            ))}
                          <button
                            type="button"
                            className="secondary"
                            onClick={() => push({ companyName: '', companyDescription: '', position: '', start: new Date(), end: new Date(), isCurrent: false })}
                          >
                            Add resumes
                          </button>
                        </div>
                      )}
                    </FieldArray>

                    <div>
                      <Button disabled={isSubmitting} type="submit" variant="contained" color="primary">Create Profile</Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </MuiPickersUtilsProvider>
        </div>
      }
    </React.Fragment>
  );
};

export default observer(UserProfileForm);