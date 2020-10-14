import React, { useEffect, useContext } from 'react';
import Banner from './components/Banner';
import { useParams } from 'react-router-dom';
import { RootStoreContext } from '../../app/stores/rootStore';
import { observer } from 'mobx-react-lite';

const CompanyName = () => {
  // const [startUpProfile, setStartUpProfile] = useState(null)
  const rootStore = useContext(RootStoreContext);
  const {
    getStartUpProfile, startUpProfile, loadingProfile
  } = rootStore.startUpStore;

  const { id }: any = useParams();

  useEffect(() => {
    if (id) {
      getStartUpProfile(id);
    }
  }, [id, getStartUpProfile])

  return (
    <div className="CompanyName">
      {loadingProfile && !startUpProfile && <div>Loading ...</div>}
      {startUpProfile && <div>
        {/* <Navbar /> */}
        <Banner startUpProfile={startUpProfile} />
        {/* <Footer /> */}
      </div>}
    </div>
  )
}

export default observer(CompanyName);