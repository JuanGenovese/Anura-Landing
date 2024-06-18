import React, { useRef, useEffect } from 'react'
import style from "./SecondView.module.css"
import { Link } from 'react-router-dom'
import {IzqADer, DerAIzq, aparecer } from '../../../Animaciones/animaciones'


const SecondView = () => {
    const fotosRef = useRef(null)
    const caracteristicasRef = useRef(null)
    const conservacionRef = useRef(null)
    const mapasRef = useRef(null)
    const cantoRef = useRef(null)
    const lugarRef = useRef(null)


    useEffect(() => {

        if (window.innerWidth >= 1360) {
            IzqADer(fotosRef.current)
            IzqADer(caracteristicasRef.current)

            aparecer(cantoRef.current)
            aparecer(lugarRef.current)

            DerAIzq(conservacionRef.current)
            DerAIzq(mapasRef.current)
    
        } else if (window.innerWidth <= 700) {
            IzqADer(fotosRef.current)
            DerAIzq(cantoRef.current)
            IzqADer(conservacionRef.current)
            DerAIzq(caracteristicasRef.current)
            IzqADer(lugarRef.current)
            DerAIzq(mapasRef.current)

        }

        
    }, [])

  return (
    <div className={style.contenido}>

        <p className={style.SobreLaApp}> Fichas detalladas con toda la información necesaria para que logres identificar las diferentes especies de anuros presentes en Jujuy. Ideal para usar en el campo, ya que podés acceder sin necesidad de tener conexión a internet. </p>
        
        <div className={style.grid}>


            <div className={style.gridDiv} ref={fotosRef}>

                <div className={style.title}>
                    <img src="/camera-solid.svg" className={style.fotoIcon}/> 
                    <h4>Fotos </h4>
                </div>
                <p>más de 200 registros fotográficos de ejemplares adultos.</p>

            </div>


            <div className={style.gridDiv} ref={cantoRef}>

                <div className={style.title}>
                    <img src="/volume-high-solid.svg" className={style.fotoIcon}/>
                    <h4>Canto</h4>
                    
                </div>
                <p>podrás reproducir el canto de machos de todas las especies que tienen registro. </p>
            
            </div>


            <div className={style.gridDiv} ref={conservacionRef}> 
                
                <div className={style.title}>
                    <img src="/book-medical-solid.svg" className={style.fotoIcon}/>
                    <h4>Estado de conservación</h4>
                </div>
                
                <p>información a nivel global y nacional, para que sepas cuales son las especies en peligro y amenazadas.</p>
            
            </div>


            <div className={style.gridDiv} ref={caracteristicasRef}> 
                
                <div className={style.title}>
                    <img src="/question-solid.svg" className={style.fotoIcon}/>
                    <h4>Caracteristicas</h4>
                </div>
                
                <p>con la descripción de caracteres morfológicos que, junto con las fotos, te ayudarán a reconocer las diferentes especies.</p>
            
            </div>


            <div className={style.gridDiv} ref={lugarRef}>
                
                <div className={style.title}>
                    <img src="/location-dot-solid.svg" className={style.fotoIcon}/>
                    <h4>¿Donde se encuentran?</h4>
                </div> 
                
                <p>encontrá toda la información acerca de los microhábitats que ocupan estas especies.</p>
            
            </div>


            <div className={style.gridDiv} ref={mapasRef}> 
                
                <div className={style.title}>
                    <img src="/map-solid.svg" className={style.fotoIcon}/>
                    <h4>Mapas </h4>
                </div>
                
                <p>con la distribución en la provincia de cada especie e información a nivel nacional y general.</p>
            
            </div>
        
        </div>
        
        <div className={style.verMasCont}>
            <Link to="/aprenderMas" className={style.Link}>
                <div className={style.hover}>
                    <p> Aprender más</p>
                    <img src="/angles-right-solid.svg" className={style.verMasIcon} />
                </div>
            </Link>
            
            
            
        </div>
        

    </div>
  )
}

export default SecondView