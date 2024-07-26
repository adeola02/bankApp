import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";
import ResetPassword from "./components/Auth/ResetPassword";
import Verification from "./components/Auth/Verification";
import LandingPage from "./components/LandingPage";
import HomePage from "./Page/HomePage";
import LoadingScreen from "./components/Auth/LoadingScreen";
// import Pin from "./components/Auth/Pin";

const App = () => {
  return (
    <HashRouter>
      <Routes>
     
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/verify/:id" element={<Verification />} />
        <Route path="/homePage" element={<LandingPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
