import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import './App.css'

function App() {

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
