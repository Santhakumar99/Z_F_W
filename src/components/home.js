import React from 'react'
import { useState, useEffect } from "react";
import Navigation  from './navigation'
import { Header } from "./header";
import { Features } from "./features";
import { About } from "./about";
import { Services } from "./services";
import { Gallery } from "./gallery";
import { Testimonials } from "./testimonials";
import { Team } from "./Team";
import  Contact  from "./Contact";
import { Introduction } from "./intro";
import JsonData from "../data/data.json";
import jwt_decode from "jwt-decode";
import ProviderData from './ProviderData';
const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  
  let tokens = localStorage.getItem("user-info");
  let decoded;
if (tokens) {
  decoded = jwt_decode(tokens);
  console.log(decoded);
  }
  const UserName =decoded!=null&&decoded.UserName
  const adminLogin = decoded != null && decoded.loginType
  console.log(adminLogin)
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);
  
  return (
      <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Introduction data={landingPageData.Introduction}/>
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <ProviderData />
      <Testimonials data={landingPageData.Testimonials} />
          <Contact data={landingPageData.Contact} />
          </div>
  )
}

export default Home