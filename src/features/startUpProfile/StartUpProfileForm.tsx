import React, { useContext, useEffect, useState } from 'react';
import {
  Formik,
  Form,
  Field,
  ErrorMessage, FieldArray
} from 'formik';

import { RootStoreContext } from '../../app/stores/rootStore';
import { Button, FormControl, InputLabel, MenuItem, TextField } from '@material-ui/core';
import { Select } from 'formik-material-ui';
import { observer } from 'mobx-react-lite';
import { IStartUpProfileForm} from '../../app/models/startUp';
import { IBussinessModelOption, IFundingOption, IIndustryOption, ISdgOption, IStageOption, IStartUpMemberOption } from '../../app/models/startUpOption';


const StartUpProfileForm = () => {
  const rootStore = useContext(RootStoreContext);
  const { isUserProfile } = rootStore.userStore;
  const { fetchStartUpOption, fetchMemberForStartUp, getBussinessModelOptions, getFundingOptions, getIndustryOptions, getSdgOptions, getStageOptions, getMemberOptions, loading, sdgOptions } = rootStore.startUpOption;
  const {createStartup} = rootStore.startUpStore;
  const [selectedSDGId, setSelectedSDGId] = useState('');
  const [selectedSDGName, setSelectedSDGName] = useState('');
  const [selectedSDGDescription, setSelectedSDGDescription] = useState('');

  const initialValues: IStartUpProfileForm = {
    name: '', email: '', website: '', tagLine: '', description: '', valueProposition: '',
    isRegistered: false, videoPitch: '', averageAgeOfTeamMembers: '', totalTeamMembers: 1,
    founded: 2020, impact: false,
    location: {
      name: '',
      address: '',
      country: 'Denmark',
      latitude: 55.612919,
      longitude: 12.363130
    },
    socialMedia: {
      instagram: '',
      facebook: '',
      linkedin: '',
    },
    level: {
      stageId: '',
      fundingId: '',
      bussinessModelId: '',
      industryId: ''
    },
    // sdgDescription: '',
    // sdgTitle: '',
    sDGs: [],
    memberNames: [],
    sdgSel: '',
    sdgDescription: ''
  };

  useEffect(() => {
    fetchStartUpOption();
    fetchMemberForStartUp();
  }, [fetchStartUpOption, fetchMemberForStartUp])

  return (
    <React.Fragment>
      {isUserProfile && !loading &&
        <div style={{ width: 600, margin: 'auto' }}>
          <h1>Create StartUp</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              createStartup(values);
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
                      id="name"
                      name="name"
                      placeholder="Startup name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name} />
                    <ErrorMessage name="name" component="div" />
                  </FormControl>
                  <FormControl fullWidth>
                    <Field
                      type="text"
                      component={TextField}
                      id="email"
                      name="email"
                      placeholder="Startup email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email} />
                    <ErrorMessage name="email" component="div" />
                  </FormControl>
                  <FormControl fullWidth>
                    <Field
                      type="text"
                      component={TextField}
                      id="website"
                      name="website"
                      placeholder="Startup website"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.website} />
                    <ErrorMessage name="website" component="div" />
                  </FormControl>
                  <FormControl fullWidth>
                    <Field
                      type="text"
                      component={TextField}
                      id="tagLine"
                      name="tagLine"
                      placeholder="Startup tagLine"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.tagLine} />
                    <ErrorMessage name="tagLine" component="div" />
                  </FormControl>
                  <FormControl fullWidth>
                    <Field
                      type="text"
                      component={TextField}
                      id="description"
                      name="description"
                      placeholder="Description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description} />
                    <ErrorMessage name="description" component="div" />
                  </FormControl>
                  <FormControl fullWidth>
                    <Field
                      type="text"
                      component={TextField}
                      id="valueProposition"
                      name="valueProposition"
                      placeholder="Value Proposition"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.valueProposition} />
                    <ErrorMessage name="valueProposition" component="div" />
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="isRegistered">Registered</InputLabel>
                    <Field
                      type="checkbox"
                      component={TextField}
                      id="isRegistered"
                      name="isRegistered"
                      placeholder="isRegistered"
                      margin="normal"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.isRegistered} />
                    <ErrorMessage name="isRegistered" component="div" />
                  </FormControl>
                  <FormControl fullWidth>
                    <Field
                      type="text"
                      component={TextField}
                      id="videoPitch"
                      name="videoPitch"
                      placeholder="Video pitch"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.videoPitch} />
                    <ErrorMessage name="videoPitch" component="div" />
                  </FormControl>
                  <FormControl fullWidth>
                    <Field
                      type="text"
                      component={TextField}
                      id="averageAgeOfTeamMembers"
                      name="averageAgeOfTeamMembers"
                      placeholder="Average age of team members"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.averageAgeOfTeamMembers} />
                    <ErrorMessage name="averageAgeOfTeamMembers" component="div" />
                  </FormControl>
                  <FormControl fullWidth>
                    <Field
                      type="number"
                      component={TextField}
                      id="totalTeamMembers"
                      name="totalTeamMembers"
                      placeholder="Total team members"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.totalTeamMembers} />
                    <ErrorMessage name="totalTeamMembers" component="div" />
                  </FormControl>
                  <FormControl fullWidth>
                    <Field
                      type="text"
                      component={TextField}
                      id="founded"
                      name="founded"
                      placeholder="Founded year"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.founded} />
                    <ErrorMessage name="founded" component="div" />
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
                  <FormControl fullWidth>
                    <Field
                      type="text"
                      component={TextField}
                      id="location.country"
                      name="location.country"
                      placeholder="country"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.location.country} />
                    <ErrorMessage name="country" component="div" />
                  </FormControl>
                  <FormControl fullWidth>
                    <Field
                      type="text"
                      component={TextField}
                      id="socialMedia.instagram"
                      name="socialMedia.instagram"
                      placeholder="Instagram"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.socialMedia.instagram} />
                    <ErrorMessage name="address" component="div" />
                  </FormControl>
                  <FormControl fullWidth>
                    <Field
                      type="text"
                      component={TextField}
                      id="socialMedia.facebook"
                      name="socialMedia.facebook"
                      placeholder="facebook"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.socialMedia.facebook} />
                    <ErrorMessage name="facebook" component="div" />
                  </FormControl>
                  <FormControl fullWidth>
                    <Field
                      type="text"
                      component={TextField}
                      id="socialMedia.linkedin"
                      name="socialMedia.linkedin"
                      placeholder="linkedin"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.socialMedia.linkedin} />
                    <ErrorMessage name="linkedin" component="div" />
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="level.stageId">Stage</InputLabel>
                    <Field
                      name="level.stageId"
                      component={Select}
                      inputProps={{
                        id: "level.stageId",
                        onBlur: handleBlur,
                        multiple: false
                      }}
                    >
                      {getStageOptions &&
                        getStageOptions.map((stage: IStageOption) => (
                          <MenuItem key={stage.id} value={stage.id}>{stage.stageName}</MenuItem>
                        ))}
                    </Field>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="level.fundingId">Funding</InputLabel>
                    <Field
                      name="level.fundingId"
                      component={Select}
                      inputProps={{
                        id: "level.fundingId",
                        onBlur: handleBlur,
                        multiple: false
                      }}
                    >
                      {getFundingOptions &&
                        getFundingOptions.map((funding: IFundingOption) => (
                          <MenuItem key={funding.id} value={funding.id}>{funding.fundingType}</MenuItem>
                        ))}
                    </Field>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="level.bussinessModelId">Bussiness Model</InputLabel>
                    <Field
                      name="level.bussinessModelId"
                      component={Select}
                      inputProps={{
                        id: "level.bussinessModelId",
                        onBlur: handleBlur,
                        multiple: false
                      }}
                    >
                      {getBussinessModelOptions &&
                        getBussinessModelOptions.map((model: IBussinessModelOption) => (
                          <MenuItem key={model.id} value={model.id}>{model.bussinessModelName}</MenuItem>
                        ))}
                    </Field>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="level.industryId">Industry</InputLabel>
                    <Field
                      name="level.industryId"
                      component={Select}
                      inputProps={{
                        id: "level.industryId",
                        onBlur: handleBlur,
                        multiple: false
                      }}
                    >
                      {getIndustryOptions &&
                        getIndustryOptions.map((industry: IIndustryOption) => (
                          <MenuItem key={industry.id} value={industry.id}>{industry.type}</MenuItem>
                        ))}
                    </Field>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="memberNames">Select Member</InputLabel>
                    <Field
                      name="memberNames"
                      component={Select}
                      inputProps={{
                        id: "memberNames",
                        multiple: true,
                      }}
                    >
                      {getMemberOptions && getMemberOptions.map((member: IStartUpMemberOption) => (
                        <MenuItem key={member.id} value={member.id}>{member.name}</MenuItem>
                      ))}
                    </Field>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="impact">Impact</InputLabel>
                    <Field
                      type="checkbox"
                      component={TextField}
                      id="impact"
                      name="impact"
                      placeholder="Impact"
                      margin="normal"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.impact} />
                    <ErrorMessage name="impact" component="div" />
                  </FormControl>
                  {values.impact &&
                    <FieldArray name="sDGs">
                      {({ insert, remove, push }) => (
                        <div>
                          <FormControl fullWidth>
                            <InputLabel htmlFor="sdgSel">Select SDG</InputLabel>
                            <Field
                              name="sdgSel"
                              component={Select}
                              onChange={(e: any) => {
                                handleChange(e);
                                const v = e.target.value as string;
                                if (sdgOptions.has(v)) {
                                  const sdg = sdgOptions.get(v);
                                  setSelectedSDGId(v);
                                  setSelectedSDGName(sdg.name);
                                  setSelectedSDGDescription('');
                                }
                              }}
                              inputProps={{
                                id: "sdgSel",
                                multiple: false,
                              }}
                            >
                              {getSdgOptions && getSdgOptions.map((sdg: ISdgOption) => (
                                <MenuItem key={sdg.id} value={sdg.id}>{sdg.name}</MenuItem>
                              ))}
                            </Field>
                          </FormControl>
                          <FormControl fullWidth>
                            <Field
                              type="text"
                              component={TextField}
                              id="sdgDescription"
                              name="sdgDescription"
                              placeholder="Sdg Description"
                              onChange={(e: any) => {
                                handleChange(e);
                                const v = e.target.value as string;
                                setSelectedSDGDescription(v);
                              }}
                              onBlur={handleBlur}
                              value={selectedSDGDescription} />
                            <ErrorMessage name="sdgDescription" component="div" />
                          </FormControl>
                          <button
                            type="button"
                            className="secondary"
                            onClick={() => {
                              selectedSDGId && selectedSDGName &&
                                push({ id: selectedSDGId, name: selectedSDGName, description: selectedSDGDescription });

                            }}
                          >
                            Add SDG
                          </button>
                          {values.sDGs.length > 0 &&
                            values.sDGs.map((sdg, index) => (
                              <div className="row" key={index}>
                                <div className="col">
                                  <Field
                                    name={`sDGs.${index}.name`}
                                    placeholder="Sdg name"
                                    type="text"
                                    disabled
                                  />
                                </div>
                                <div className="col">
                                  <label htmlFor={`sDGs.${index}.description`}>SDG description</label>
                                  <Field
                                    name={`sDGs.${index}.description`}
                                    placeholder=""
                                    type="text"
                                  />
                                  <ErrorMessage
                                    name={`sDGs.${index}.description`}
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
                        </div>
                      )}
                    </FieldArray>
                  }
                  <div>
                    <Button disabled={isSubmitting} type="submit" variant="contained" color="primary">Submit</Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      }
    </React.Fragment>
  );
};

export default observer(StartUpProfileForm);