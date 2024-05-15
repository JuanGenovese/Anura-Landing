import React from 'react'
import style from "./Parte3.module.css"

const Parte3 = () => {
  return (
    <div className={style.parte3}>

      
        

      <div className={style.detalles}>

        

        <div className={style.detalleItem}>
          <h2>UICN</h2>
          <p>estado de conservación de la especie a nivel global según la Lista Roja de la Unión Internacional para la Conservación de la Naturaleza (UICN, 2023).</p>
        </div> 
        
        <div className={style.imgCont}>
          <img src="/referencias.png" className={style.imagen} />
        </div>

        
        
        <div className={style.detalleItem}>
          <h2>Detectabilidad auditiva</h2>
          <p>categorías referidas al grado de dificultad que presenta una especie para ser escuchada en la naturaleza. </p>
        </div>
        
        <div className={style.detalleItem}>
          <h2>Argentina</h2>
          <p>estado de conservación de la especie a nivel nacional, basado en la última Categorización del Estado de Conservación de los Anfibios de la República Argentina (Vaira et al. 2012). </p>
        </div> 
        
        <div className={style.detalleItem}>
          <h2>Abundancia</h2>
          <p>categorías referidas a la cantidad relativa de individuos de la especie que pueden observarse en la naturaleza. Información obtenida a partir de Vaira et al. 2012. </p>
        </div>
        
        <div className={style.detalleItem}>
          <h2>Detectabilidad visual</h2>
          <p> categorías referidas al grado de dificultad que presenta una especie para ser observada en la naturaleza. </p>
        </div>

      </div>
    </div>
  )
}

export default Parte3