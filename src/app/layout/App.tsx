import React, { useContext, useEffect } from "react"
import HomePage from "../../features/home/HomePage"
import {
  Route,
  Switch,
  RouteComponentProps,
  withRouter,
} from "react-router-dom"
import { observer } from "mobx-react-lite"
import UserProfile from "../../features/userProfile/UserProfile"
import StartUpProfile from "../../features/startUpProfile/StartUpProfile"
import NavBar from "../../features/navBar/NavBar"
import PrivateRoute from "./PrivateRoute"
import SuperModalContainer from "../common/modals/SuperModalContainer"
import ModalContainer from "../common/modals/ModalContainer"
import { RootStoreContext } from "../stores/rootStore"
import UserProfileForm from "../../features/userProfile/UserProfileForm"
import CompanyName from "../../features/companyName/CompanyName"
import CoFounderProfile from "../../features/user/CoFounderProfile"
import StartUpProfileForm from "../../features/startUpProfile/StartUpProfileForm"
import Footer from "../../features/companyName/components/Footer"

const App: React.FC<RouteComponentProps> = ({ location }) => {
  const rootStore = useContext(RootStoreContext)
  const { setAppLoaded, token, appLoaded } = rootStore.commonStore
  const { getUser } = rootStore.userStore

  useEffect(() => {
    if (token) {
      getUser().finally(() => setAppLoaded())
    } else {
      setAppLoaded()
    }
  }, [getUser, setAppLoaded, token])

  if (!appLoaded) return <div>Loading app... </div>

  return (
    <div className="app_body_content">
      {/* use Super Modal Container to show Modal in center always on screen*/}
      <SuperModalContainer />
      {/* use Modal Container to show Modal in random location on screen */}
      <ModalContainer />
      {/* <ToastContainer position='bottom-right' /> */}
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* PrivateRoute use if user loggedin, just demo, change accordingly.
            Create your own Route if required, depending on state or other requirements */}
          <PrivateRoute path={`/user/:username`} component={UserProfile} />
          <Route path="/userProfile" component={UserProfile} />
          <Route path="/createUserProfile" component={UserProfileForm} />
          <Route path="/createStartUpProfile" component={StartUpProfileForm} />
          <Route path="/cofounder" component={CoFounderProfile} />
          <Route exact path="/startUpProfile" component={StartUpProfile} />
          <Route exact path="/startUpProfile/:id" component={CompanyName} />
          {/* Not found component is here */}
        </Switch>
        <Footer />
      </div>
    </div>
  )
}

export default withRouter(observer(App))
