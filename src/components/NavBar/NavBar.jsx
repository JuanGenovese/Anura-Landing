import React, {useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import style from "./NavBar.module.css"

const NavBar = () => {
  const [ visible, setVisible ] = useState(false)
  const [ windowWidth, setWindowWidth ] = useState(0)

  const location = useLocation()

  useEffect(() => {

   
    const handleScroll = () => { 


      if(location.pathname === "/aprenderMas" || window.scrollY > 450/*875*/) {
        setVisible(true)
      } else {
        setVisible(false)
      }

    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [window.scrollY]) 

  return (

    <div className={`${style.NavBar} ${ visible ? style.NavBarVisible : style.NavBarHidden}`}>

      <a href={location.pathname === "/" ? "#Anura" : "/"}><img src="/AnurApp2.png" className={style.anurNav}/></a>
       
      <a href={location.pathname === "/" ? "#sobre-app" : "/#sobre-app"} ><span> Sobre la app </span></a>
      <a href={location.pathname === "/" ? "#equipo" : "/#equipo"}><span> Equipo </span></a>
      <Link to="/masinfo"><span> Más info </span></Link>
        
    </div>
  )
}

export default NavBar