import React, {useEffect, useRef} from 'react'
import style from "./Parte3.module.css"
import { aparecer } from '../../../Animaciones/animaciones'

const Parte3 = () => {

  const uicnRef = useRef(null)
  const argRef = useRef(null)
  const abundRef = useRef(null)
  const detectVisRef = useRef(null)
  const detectAudRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth <= 700) {
      aparecer(uicnRef.current)
      aparecer(detectAudRef.current, 1)
      aparecer(argRef.current, 1)
      aparecer(abundRef.current, 1)
      aparecer(detectVisRef.current, 1)
      

    } else {
      aparecer(uicnRef.current)
      aparecer(argRef.current, 1)
      aparecer(abundRef.current, 1.5)
      aparecer(detectVisRef.current, 2)
      aparecer(detectAudRef.current,2.5)
    }
    
  })
  
  return (
    <div className={style.parte3}>
        

      <div className={style.detalles}>


        <div className={style.detalleItem} ref={uicnRef}>
          <img src="/iconos/uicn_green.png" className={style.icono} />
          <h2>UICN</h2>
          <p>estado de conservación de la especie a nivel global según la Lista Roja de la Unión Internacional para la Conservación de la Naturaleza (UICN, 2023).</p>
        </div> 
        
        {window.innerWidth > 700 ? 
          <div className={style.imgCont}>
            <img src="/referencias.png" className={style.imagen} />
          </div> : null
        }

        
        <div className={style.detalleItem} ref={detectAudRef}>
          <img src="/iconos/auditiva_green.png" className={style.icono} />
          <h2>Detectabilidad auditiva</h2>
          <p>categorías referidas al grado de dificultad que presenta una especie para ser escuchada en la naturaleza. </p>
        </div>
        
        <div className={style.detalleItem} ref={argRef}>
          <img src="/iconos/arg_green.png" className={style.icono} />
          <h2>Argentina</h2>
          <p>estado de conservación de la especie a nivel nacional, basado en la última Categorización del Estado de Conservación de los Anfibios de la República Argentina (Vaira et al. 2012). </p>
        </div> 
        
        <div className={style.detalleItem} ref={abundRef}>
          <img src="/iconos/abund_green.png" className={style.icono} />
          <h2>Abundancia</h2>
          <p>categorías referidas a la cantidad relativa de individuos de la especie que pueden observarse en la naturaleza. Información obtenida a partir de Vaira et al. 2012. </p>
        </div>
        
        <div className={style.detalleItem} ref={detectVisRef}>
          <img src="/iconos/dvisual_green.png" className={style.icono} />
          <h2>Detectabilidad visual</h2>
          <p> categorías referidas al grado de dificultad que presenta una especie para ser observada en la naturaleza. </p>
        </div>

      </div>
    </div>
  )
}

export default Parte3