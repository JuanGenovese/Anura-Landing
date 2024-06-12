import React from 'react'
import { Link } from 'react-router-dom'
import style from "./FirstView.module.css"
import { FirstViewAnimations } from '../../../Animaciones/animaciones'
import { useEffect, useRef } from 'react'

const FirstView = () => {

  const logoRef = useRef(null)
  const descriptionRef = useRef(null)
  const txtRef = useRef(null)
  const btnRef = useRef(null)

  useEffect(() => {
    FirstViewAnimations(logoRef.current, descriptionRef.current, txtRef.current, btnRef.current)
  },[])

  return (
    <div className={style.FirstView}>

      <img src="/Landing4.JPG" className={style.fondo}/>
  
      <div className={style.TitleCont}>
  
        <img src="/AnurApp2.png" className={style.logo} ref={logoRef}/>
        <p className={style.Description} ref={descriptionRef}>App gratuita que permite conocer e identificar las diferentes especies de ranas y sapos presentes en la provincia de Jujuy. </p>
        <p className={style.txt} ref={txtRef}>¡Conocé la diversidad de anfibios de Jujuy!</p>
        <Link to="https://biodiversidadjujuy.com.ar/" className={style.Link}>
          <button className={style.DownloadButton} ref={btnRef}> DESCARGAR </button>
        </Link>
            
  
      </div>     

    </div>
  )
}

export default FirstView