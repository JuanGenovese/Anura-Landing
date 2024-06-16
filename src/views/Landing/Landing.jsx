import React, { useEffect } from 'react'
import style from "./Landing.module.css"
import FirstView from '../../components/Landing/FirstView/FirstView.jsx'
import SecondView from '../../components/Landing/SecondView/SecondView.jsx'
import ThirdView from '../../components/Landing/ThirdView/ThirdView.jsx'

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  })
  return (
    <div className={style.conteiner} id='Anura'>
      
      <FirstView/>

      <div className={style.SecondBG} id='sobre-app'>
        <img src="/Landing3.JPG" className={style.fondo2}/>
        <SecondView/>
        <ThirdView/>
      </div>
      
    </div>
  )
}

export default Landing