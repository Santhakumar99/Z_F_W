import { useState, useEffect } from "react";
// import { Navigation } from "./components/navigation";
// import { Header } from "./components/header";
// import { Features } from "./components/features";
// import { About } from "./components/about";
// import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import Home from "./components/home";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Introduction } from "./components/intro";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login"
import ChangePassword from "./components/ChangePassword";
import Registration from "./components/Registration";
import AdminDashboard from "./components/AdminDashboard";
import Thanks from "./components/Thanks";
import jwt_decode from "jwt-decode";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {

  const [landingPageData, setLandingPageData] = useState({});
  let tokens = localStorage.getItem("user-info");
  let decoded;
if (tokens) {
  decoded = jwt_decode(tokens);
  console.log(decoded);
}
  const adminLogin = decoded != null && decoded.loginType
  console.log(adminLogin)
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          </Route>
        <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/changepassword" element={<ChangePassword />}>
          </Route>
          <Route path="/register" element={<Registration />}>
          </Route>
          <Route path="/forgotpassword" element={<Registration />}>
          </Route>
          <Route path="/thanks" element={<Thanks />}>
          </Route>
          {adminLogin === "admin" ? (
            <Route path="/admindashboard" element={<AdminDashboard />} >
            </Route>
          ) : (<Route path="/" element={<Home />}>
          </Route>)}
      </Routes>
    </BrowserRouter>

    </div>
  );
};

export default App;
