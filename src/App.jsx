import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import './App.css'
import { useEffect } from "react";

function App() {

  useEffect(() => {

    const handler = () => {
      console.log("Estoy funcionando")
    }



    window.addEventListener("scroll", handler)

    return () => {
      window.removeEventListener("scroll", handler)
    }
  })

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
