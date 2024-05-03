import React from 'react'
import style from "./Landing.module.css"
import FirstView from '../../components/Landing/FirstView/FirstView.jsx'
import SecondView from '../../components/Landing/SecondView/SecondView.jsx'
import ThirdView from '../../components/Landing/ThirdView/ThirdView.jsx'

const Landing = () => {
  return (
    <div className={style.conteiner}>
      <FirstView/>
      <SecondView/>
      <ThirdView/>
    </div>
  )
}

export default Landing