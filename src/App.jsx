import { Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Landing from "./views/Landing/Landing";
import MasInfo from "./views/MasInfo/MasInfo";
import Footer from "./components/Footer/Footer"

import './App.css'
import { useEffect, useState } from "react";

const App = () => {
  const location = useLocation()

  useEffect(() => {

    const handler = () => {
      const newDownPosition = Math.ceil(window.scrollY / 38.4375) * 38.4375;
      window.scrollTo({
        top: newDownPosition,
        behavior: 'smooth',
      });
    }

    window.addEventListener("scroll", handler)

    return () => {
      window.removeEventListener("scroll", handler)
    }

  }, [])

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
