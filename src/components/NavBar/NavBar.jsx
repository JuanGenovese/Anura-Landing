import React from 'react'
import style from "./NavBar.module.css"

const NavBar = () => {
  return (
    <div className={style.NavBar}>

       <img src="/AnurApp2.png" className={style.anurNav}/>
       <span> Sobre la app </span>
       <span> Equipo </span>
       <span> Más info </span>
        
    </div>
  )
}

export default NavBar