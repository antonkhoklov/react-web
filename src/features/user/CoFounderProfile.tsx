import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect} from 'react';
import { IResume, ISkill } from '../../app/models/userProfile';
import { RootStoreContext } from '../../app/stores/rootStore';

const CoFounderProfile = () => {
  const rootStore = useContext(RootStoreContext);
  const { isUserProfile } = rootStore.userStore;
  const { userProfile, loadUserProfile } = rootStore.userProfileStore;

  useEffect(() => {
    if(isUserProfile) {
      loadUserProfile();
    }
  }, [isUserProfile, loadUserProfile])

  return (
    <div>
      {userProfile && isUserProfile &&
        <React.Fragment>
          <p>IsAvailable for Freelance: {userProfile.isAvailableForFreelance ? 'Yes' : 'No'}</p>
          <h4>Title: {userProfile.title}</h4>
          <h4>Skills: </h4>
          {userProfile!.userSkills && userProfile.userSkills.map((skill: ISkill) => (
            <span style={{ marginRight: 4 }}>{skill.name}</span>
          ))}
          <h4>Location:</h4>
          <p>Location name: {userProfile.location.name}</p>
          <p>Address: {userProfile.location.address}</p>
          <h4>Resumes: </h4>
          {userProfile!.resumes && userProfile.resumes.map((resume: IResume) => (
            <React.Fragment>
              <p style={{ marginRight: 4 }}>Company name: {resume.companyName}</p>
              <p style={{ marginRight: 4 }}>Company Description: {resume.companyDescription}</p>
              <p style={{ marginRight: 4 }}>Position: {resume.position}</p>
              <p style={{ marginRight: 4 }}>Starting Date: {resume.start}</p>
              <p style={{ marginRight: 4 }}>End Date: {resume.isCurrent ? 'Working here' : resume.end}</p>
              <p style={{ marginRight: 4 }}>IsCurrent: {resume.isCurrent ? 'Yes' : 'No'}</p>
            </React.Fragment>
          ))}
        </React.Fragment>
      }

    </div>
  );
};

export default observer(CoFounderProfile);