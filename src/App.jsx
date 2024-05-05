import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Landing from "./views/Landing/Landing";
import MasInfo from "./views/MasInfo/MasInfo";

import './App.css'
import { useEffect, useState } from "react";

function App() {

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

  },[])

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route path="/masinfo" element={<MasInfo/>}/>
      </Routes>
    </div>
  )
}

export default App
