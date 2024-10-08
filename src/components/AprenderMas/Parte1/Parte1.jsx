import React, {useEffect, useRef} from 'react'
import style from "./Parte1.module.css"
import { aparecer } from '../../../Animaciones/animaciones'

const Parte1 = () => {

  const imagenRef = useRef(null)
  const fotosRef = useRef(null)
  const nomCientRef = useRef(null)

  useEffect(() => {
    aparecer(fotosRef.current, 0.5)
    aparecer(nomCientRef.current, 1)
    aparecer(imagenRef.current, 1.5)
  })
  
  return (
    <div className={style.parte1}>

      <div className={style.detalles}>

        <div className={style.fotos} ref={fotosRef}>
          <h2> Fotos </h2>
          <p>ejemplares adultos de la especie en sus diferentes aspectos y posturas.   </p>
        </div>

        <div className={style.nombreCientifico} ref={nomCientRef}>
          <h2>Nombre científico</h2>
          <p>categorías taxonómicas de género y especie asignadas. </p>
        </div>
          
      </div>

      <div className={style.imgCont}>
        
        <img src="/referencia1.png" className={style.imagen1} ref={imagenRef} />


      </div>
            
      

    </div>
  )
}

export default Parte1