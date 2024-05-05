import React from 'react'
import style from "./MasInfo.module.css"

const MasInfo = () => {
  return (
    <div className={style.cont}>
        <img src="/MasInfoBG1.jpg" className={style.BG}/>

        <button className={style.Back}><img className={style.arrow} src="/arrow-left-solid.svg"/></button>
        <div className={style.SobreAnuros}>
            <h1> Sobre los anuros</h1>
            <p>Los anuros son un grupo de animales comúnmente conocidos como sapos y ranas. Presentan un cuerpo corto y ensanchado, cuatros patas y carecen de cola. Podemos observarlos frecuentemente de noche, cuando la mayoría de las especies están activas. Los machos emiten cantos para atraer a las hembras a los sitios de reproducción. En general, el ciclo de vida de los anuros incluye una fase en la tierra, donde viven los juveniles y adultos, y una fase en el agua, donde se desarrollan los huevos y los renacuajos. Sin embargo, existen muchas variantes a este esquema general de ciclo de vida. Los anuros son un grupo de organismos muy diverso, no sólo en número, con cerca de 7000 especies descriptas en todo el mundo, sino también en hábitos, modos reproductivos y comportamiento. Este catálogo te invita a introducirse en el fascinante mundo de estos animales y conocer las especies que podemos encontrar en la provincia de Jujuy, bienvenidos!
            </p>
            <div className={style.buttons}>
              <span className={style.DownloadButton}> Vamos! </span>
              <span className={style.Down}><img className={style.arrow} src="/arrow-down-solid.svg"/></span>
            </div>
        </div>
        
    
        <div className={style.Referencias}>
            
        </div>
        
    </div>
  )
}

export default MasInfo