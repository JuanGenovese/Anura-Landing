import React from 'react'
import style from "./Parte1.module.css"

const Parte1 = () => {
  return (
    <div className={style.parte1}>

      <div className={style.detalles}>

        <div className={style.fotos}>
          <h2> Fotos </h2>
          <p>ejemplares adultos de la especie en sus diferentes aspectos y posturas.   </p>
        </div>

        <div className={style.nombreCientifico}>
          <h2>Nombre científico</h2>
          <p>categorías taxonómicas de género y especie asignadas. </p>
        </div>
          
      </div>
            
      <img src="/referencia1.png" className={style.imagen1} />

    </div>
  )
}

export default Parte1