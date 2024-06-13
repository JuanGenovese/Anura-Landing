import { Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Landing from "./views/Landing/Landing";
import MasInfo from "./views/MasInfo/MasInfo";
import AprenderMas from "./views/AprenderMas/AprenderMas";
import Footer from "./components/Footer/Footer"

import React ,{ useEffect, useState } from "react";
import './App.css'

const App = () => {

  const location = useLocation()
  console.log(window.innerWidth) //1360
  console.log(window.innerHeight) //615


  return (
    <div>
      {location.pathname !== "/masinfo" && <NavBar/>}
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route path="/masinfo" element={<MasInfo/>}/>
        <Route path="/aprenderMas" element={<AprenderMas/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
