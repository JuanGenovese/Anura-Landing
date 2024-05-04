import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
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
      </Routes>
    </div>
  )
}

export default App
