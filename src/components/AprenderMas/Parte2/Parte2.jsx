import React, {useEffect, useRef} from 'react'
import style from "./Parte2.module.css"
import { IzqADer, DerAIzq } from '../../../Animaciones/animaciones'

const Parte2 = () => {

    const imagenRef = useRef(null)
    const nombreVulgarRef = useRef(null)
    const familiaRef = useRef(null)
    const tamañoRef = useRef(null)
    const habitatRef = useRef(null)
    const habitoRef = useRef(null)

    useEffect(() => {

        IzqADer(nombreVulgarRef.current)
        IzqADer(tamañoRef.current)
        IzqADer(habitoRef.current)

        DerAIzq(familiaRef.current)
        DerAIzq(habitatRef.current)

    }) 
    return (
        <div className={style.parte2}>
            
            

            <div className={style.detalles}>

                <div className={style.nombreVulgar} ref={nombreVulgarRef}>
                    <h2>Nombre Vulgar</h2>
                    <p>nombre común con el que se conoce la especie, puede variar en las diferentes regiones.</p>
                </div>

        
                <div className={style.detalleItem} ref={familiaRef}>
                    <h2>Familia</h2>
                    <p> categoría taxonómica que agrupa al conjunto de géneros y especies evolutivamente relacionados, información obtenida de Frost (2024)</p>
                </div>
        
                <div className={style.detalleItem} ref={tamañoRef}>
                    <h2>Tamaño</h2>
                    <p>categorías referidas al tamaño promedio que presentan los adultos de la especie: pequeño (hasta 50 mm), mediano (50 a 100 mm) y grande (`{">"}`100 mm). Se detalla el rango de tamaño basado en bibliografía y datos de los autores.</p>
                </div>
        
                <div className={style.detalleItem} ref={habitatRef}> 
                    <h2>Habitat</h2>
                    <p>se refiere a los lugares en donde pasan la mayor parte del tiempo los adultos de la especie. Pueden encontrarse en la tierra (terrestres), en la vegetación (arborícolas), en el agua (acuáticos) y/o en cuevas (fosoriales). </p>
                </div>
        
                <div className={style.detalleItem} ref={habitoRef}>
                    <h2>Habito</h2>
                    <p> se refiere al momento del día en el que se encuentran activos los adultos de la especie. Pueden ser diurnos, nocturnos y/o crepusculares (intervalo ante de la puesta del sol). </p>
                </div>
                
            </div>
        
            
        </div>
    )
}

export default Parte2