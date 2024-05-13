import { Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Landing from "./views/Landing/Landing";
import MasInfo from "./views/MasInfo/MasInfo";
import Footer from "./components/Footer/Footer"

import React ,{ useEffect, useState } from "react";
import './App.css'

const App = () => {

  const location = useLocation()


  return (
    <div>
      {location.pathname !== "/masinfo" && <NavBar/>}
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route path="/masinfo" element={<MasInfo/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
