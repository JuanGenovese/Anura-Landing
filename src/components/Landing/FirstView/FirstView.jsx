import React from 'react'
import { Link } from 'react-router-dom'
import style from "./FirstView.module.css"

const FirstView = () => {
  return (
    <div className={style.FirstView}>

        <img src="/Landing4.JPG" className={style.fondo}/>
  
        <div className={style.TitleCont}>
  
            <img src="/AnurApp2.png" className={style.logo}/>
            <p className={style.Description}>App gratuita que permite conocer e identificar las diferentes especies de ranas y sapos presentes en la provincia de Jujuy. </p>
            <p className={style.txt}>¡Conocé la diversidad de anfibios de Jujuy!</p>
            <Link to="https://biodiversidadjujuy.com.ar/" className={style.Link}>
              <button className={style.DownloadButton}> DESCARGAR </button>
            </Link>
            
  
        </div>     

    </div>
  )
}

export default FirstView