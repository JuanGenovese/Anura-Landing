import React, {useEffect, useRef} from 'react'
import style from "./MasInfo.module.css"
import MasInfoNav from '../../components/MasInfoNav/MasInfoNav'
import { aparecer } from '../../Animaciones/animaciones'

const MasInfo = () => {

  const SobreAnurosRef = useRef(null)
  const ConservacionRef = useRef(null)
  const DiversidadRef = useRef(null)

  useEffect (() => {
    window.scrollTo(0,0)

 
      aparecer(SobreAnurosRef.current)
      aparecer(ConservacionRef.current)
      aparecer(DiversidadRef.current)
  

  },[])
  
  return (
    <div className={style.cont}>
      <img src="/MasInfoBG1.jpg" className={style.BG}/>

      <MasInfoNav/>
        
      <div className={style.SobreAnuros} ref={SobreAnurosRef}>
        <h1> Sobre los anuros</h1>
        <p>Los anuros son un grupo de animales comúnmente conocidos como sapos,  ranas y escuerzos. Presentan un cuerpo corto y ensanchado, cuatro patas y carecen de cola. Podemos observarlos frecuentemente de noche, cuando la mayoría de las especies están activas. Los machos emiten cantos para atraer a las hembras a los sitios de reproducción. En general, el ciclo de vida de los anuros incluye una fase en la tierra, donde viven los juveniles y adultos, y una fase en el agua, donde se desarrollan los huevos y los renacuajos. Sin embargo, existen muchas modificaciones a este ciclo de vida con especies que viven exclusivamente en el agua y otras que pueden colocar huevos en tierra y nunca necesitan ocupar cuerpos de agua para completar su desarrollo y transformarse en adultos. <br/>
        <br/>Los anuros son un grupo muy diverso, no sólo en número, con más de 7600 especies reconocidas en todo el mundo, sino también en hábitos, modos reproductivos y comportamientos.<br/>  
        <br/>Esta aplicación te invita a introducirte en el fascinante mundo de estos animales y conocer las especies que podemos encontrar en la provincia de Jujuy, bienvenidos!
        </p>
      </div>
        
    
      <div className={style.Conservacion} ref={ConservacionRef}>
        <h2> Conservación </h2>
        <p> Las últimas cifras de la Lista Roja de especies amenazadas provistas por la Unión Internacional para la Conservación de la Naturaleza (UICN, 2023) muestran que, de las 7055 especies de anuros evaluadas hasta ahora, 2431 se consideran amenazadas de extinción, lo que implica más de un tercio de la diversidad global de anuros conocida. Entre las principales actividades humanas que han sido indicadas como responsables del declive de las especies se destacan: la pérdida del hábitat, la contaminación, los incendios, las enfermedades y patógenos, el impacto de especies invasoras y la utilización (particularmente para el consumo humano y el comercio como mascotas). De todas ellas, la pérdida y destrucción del hábitat debido al avance de la frontera agropecuaria, la deforestación y la urbanización,han sido señaladas como las principales causas de pérdidas de especies de anfibios<br/>
        <br/>Argentina alberga la décima fauna más grande de anfibios entre los 40 países incluidos en la Región Neotropical y se encuentra entre los quince países que superan las 100 especies en esta región. Además, está incluida entre los veinte países con el 30% de sus especies consideradas endémicas. La pérdida de hábitat ha sido considerada la amenaza más importante para la supervivencia de las especies en Argentina (Vaira et al., 2012). El impacto de las modificaciones y alteraciones de los ambientes naturales por actividades antrópicas sobre la diversidad y estatus poblacional de algunas especies de anuros ya ha sido documentado en nuestro país. Ejemplos puntuales lo constituye una especie presente en Jujuy, Gastrothecachristiani, uno de los primeros casos con datos concretos en los cuales susupervivencia se ve amenazada producto de la extirpación de poblaciones como consecuencias directas de la alteración de los ambientes que habitaban. En muchoscasos, los procesos de degradación o destrucción del hábitat han ocurrido muy recientemente, por lo que no tenemos una idea precisa de su efecto sobre la persistencia a largo plazo de las especies.
        </p>
      </div>

      <div className={style.Diversidad} ref={DiversidadRef}>
        <h2> Diversidad en Jujuy</h2>
        <p> La Provincia de Jujuy está conformada geográficamente por un mosaico de ambientes y sistemas hidrográficos que la surcan a lo largo de un fuerte gradiente altitudinal y climático, en una superficie relativamente pequeña, que se refleja en la presencia de cinco ecorregiones con gran heterogeneidad ambiental y que albergan una gran diversidad biológica. <br/>
        <br/>Hasta hoy se han registrado 43 especies de anfibios anuros en la provincia, diez de las cuales están listadas con algún grado de amenaza de extinción a escala nacional (Vaira et al. 2012) y a escala global (UICN, 2023). La diversidad de especies de la provincia representa casi el 25% del total de especies reconocidas para la República Argentina. Su distintividad se encuentra bien expresada por tres especies que tienen presencia exclusiva en Jujuy y algunas que poseen características morfológicas y modos reproductivos únicos para Argentina. <br/>
        <br/>Dado lo inaccesible de muchas regiones de la provincia (particularmente en la estación húmeda) no debe sorprender que la diversidad de anuros podría ser mayor a la conocida hasta el momento y todavía quedan muchas regiones de la provincia donde desconocemos la diversidad de sapos y ranas que pueden alojar.
        </p>
      </div>  
    </div>
  )
}

export default MasInfo