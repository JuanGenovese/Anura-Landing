import React, { useEffect } from 'react'
import style from "./AprenderMas.module.css"


import Parte1 from '../../components/AprenderMas/Parte1/Parte1'
import Parte2 from '../../components/AprenderMas/Parte2/Parte2'
import Parte3 from '../../components/AprenderMas/Parte3/Parte3'
import Parte4 from '../../components/AprenderMas/Parte4/Parte4'

const AprenderMas = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    })
  return (
    <div className={style.aprenderMasCont}>
        <img src="/Landing3.JPG" className={style.bg}/>
        <p className={style.introduccion}> En este apartado vas a encontrar toda la informacion necesaria para entender y navegar dentro de AnurApp</p>
        <Parte1/>
        <Parte2/>
        <Parte3/>
        <Parte4/>
    </div>
  )
}

export default AprenderMas