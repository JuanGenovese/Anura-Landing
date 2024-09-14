import React from 'react'
import { Link } from 'react-router-dom'
import style from "./FirstView.module.css"
import { FirstViewAnimations, aparecer} from '../../../Animaciones/animaciones'
import { useEffect, useRef } from 'react'

const FirstView = () => {
  
  const logoRef = useRef(null)
  const descriptionRef = useRef(null)
  const txtRef = useRef(null)
  const btnRef = useRef(null)

  useEffect(() => {

    if (window.innerWidth >= 1360) {

      FirstViewAnimations(
        logoRef.current, 
        descriptionRef.current, 
        txtRef.current, 
        btnRef.current
      )

    } else if (window.innerWidth < 1360) {

      aparecer(logoRef.current, 0.5)
      aparecer(descriptionRef.current, 1)
      aparecer(txtRef.current, 1.5)
      aparecer(btnRef.current, 2)
      
    }
    
  },[])

  return (
    <div className={style.FirstView}>

      <img src="/Landing4.JPG" className={style.fondo}/>
  
      <div className={style.TitleCont}>
  
        <img src="/AnurApp2.png" className={style.logo} ref={logoRef}/>
        <p className={style.Description} ref={descriptionRef}>App gratuita que permite conocer e identificar las diferentes especies de ranas y sapos presentes en la provincia de Jujuy. </p>
        <p className={style.txt} ref={txtRef}>¡Conocé la diversidad de anfibios de Jujuy!</p>
        <Link to="https://biodiversidadjujuy.com.ar/" className={style.Link}>
          <button className={style.DownloadButton} ref={btnRef}>
            { 
              window.innerWidth < 650
              ? "DESCARGAR"
              : "IR AL SITIO" 
            }
          </button>
        </Link>
            
  
      </div>     

    </div>
  )
}

export default FirstView