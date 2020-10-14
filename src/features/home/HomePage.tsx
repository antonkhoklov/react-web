import React from "react"
import GetStart from "./GetStart/GetStart"
import HeroComponent from "./HeroComponent"
import StartupsProfile from "./StartupsProfile"
import Testimonial from "./Testimonial"
import Clients from "./Clients"
import FindJob from "./FindJob"


const HomePage = () => {
  return (
    <div>
      <HeroComponent />
      <GetStart />
      <StartupsProfile />
      <Testimonial/>
      <Clients/>
      <FindJob/>

    </div>
  )
}

export default HomePage
