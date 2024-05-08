import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import style from "./MasInfo.module.css"

const MasInfo = () => {

  useEffect (() => {
    window.scrollTo(0,0)
  },[])
  
  return (
    <div className={style.cont}>
      <img src="/MasInfoBG1.jpg" className={style.BG}/>

      <Link to="/">
        <img className={style.Back} src="/arrow-left-solid.svg"/>
      </Link>
        
      <div className={style.SobreAnuros}>
        <h1> Sobre los anuros</h1>
        <p>Los anuros son un grupo de animales comúnmente conocidos como sapos,  ranas yescuerzos. Presentan un cuerpo corto y ensanchado, cuatros patas y carecen de cola.Podemos observarlos frecuentemente de noche, cuando la mayoría de las especiesestán activas. Los machos emiten cantos para atraer a las hembras a los sitios dereproducción. En general, el ciclo de vida de los anuros incluye una fase en latierra, donde viven los juveniles y adultos, y una fase en el agua, donde sedesarrollan los huevos y los renacuajos. Sin embargo, existen muchas modificacionesa este ciclo de vida con especies que viven exclusivamente en el agua y otras quepueden colocar huevos en tierra y nunca necesitan ocupar cuerpos de agua paracompletar su desarrollo y transformarse en adultos. <br/>
        <br/>Los anuros son un grupo muy diverso, no sólo en número, con más de 7600especies reconocidas en todo el mundo, sino también en hábitos, modos reproductivosy comportamientos.<br/>  
        <br/>Esta aplicación te invita a introducirse en el fascinante mundo de estosanimales y conocer las especies que podemos encontrar en la provincia de Jujuy,bienvenidos!
        </p>

        <div className={style.buttons}>
          <span className={style.Down}><img className={style.arrow} src="/arrow-down-solid.svg"/></span>
        </div>

      </div>
        
    
      <div className={style.Conservacion}>
        <h2> Conservacion </h2>
        <p> Las últimas cifras de la Lista Roja de especies amenazadas provistas por laUnión Internacional para la Conservación de la Naturaleza (UICN, 2023) muestranque, de las 7055 especies de anuros evaluadas hasta ahora, 2826 se consideranamenazadas de extinción, lo que implica más de un tercio de la diversidad global deanuros conocida. Entre las principales actividades humanas que han sido indicadascomo responsables del declive de las especies se destacan: la pérdida del hábitat,la contaminación, los incendios, las enfermedades y patógenos, el impacto deespecies invasoras y la utilización (particularmente para el consumo humano y elcomercio como mascotas). De todas ellas, la pérdida y destrucción del hábitatdebido al avance de la frontera agropecuaria, la deforestación y la urbanización,han sido señaladas como las principales causas de pérdidas de especies de anfibios<br/>
        <br/>Argentina alberga la décima fauna más grande de anfibios entre los 40 paísesincluidos en la Región Neotropical y se encuentra entre los quince países quesuperan las 100 especies en esta región. Además, está incluida entre los veintepaíses con el 30% de sus especies consideradas endémicas. La pérdida de hábitat hasido considerada la amenaza más importante para la supervivencia de las especies enArgentina (Vaira et al., 2012). El impacto de las modificaciones y alteraciones delos ambientes naturales por actividades antrópicas sobre la diversidad y estatuspoblacional de algunas especies de anuros ya ha sido documentado en nuestro país.Ejemplos puntuales lo constituye una especie presente en Jujuy, Gastrothecachristiani, uno de los primeros casos con datos concretos en los cuales susupervivencia se ve amenazada producto de la extirpación de poblaciones comoconsecuencias directas de la alteración de los ambientes que habitaban. En muchoscasos, los procesos de degradación o destrucción del hábitat han ocurrido muyrecientemente, por lo que no tenemos una idea precisa de su efecto sobre lapersistencia a largo plazo de las especies.
        </p>
      </div>

      <div className={style.Diversidad}>
        <h2> Diversidad en Jujuy</h2>
        <p> La Provincia de Jujuy está conformada geográficamente por un mosaico deambientes y sistemas hidrográficos que la surcan a lo largo de un fuerte gradientealtitudinal y climático, en una superficie relativamente pequeña, que se refleja enla presencia de cinco ecorregiones con gran heterogeneidad ambiental y que alberganuna gran diversidad biológica. <br/>
        <br/>Hasta hoy se han registrado 43 especies de anfibios anuros en la provincia,diez de las cuales están listadas con algún grado de amenaza de extinción a escalanacional (Vaira et al. 2012) y a escala global (UICN, 2003). La diversidad deespecies de la provincia representa casi el 25% del total de especies reconocidaspara la República Argentina. Su distintividad se encuentra bien expresada por tresespecies que tienen presencia exclusiva en Jujuy y algunas que poseencaracterísticas morfológicas y modos reproductivos únicos para Argentina. <br/>
        <br/>Dado lo inaccesible de muchas regiones de la provincia (particularmente en laestación húmeda) no debe sorprender que la diversidad de anuros podría ser mayor ala conocida hasta el momento y todavía quedan muchas regiones de la provincia dondedesconocemos la diversidad de sapos y ranas que pueden alojar.
        </p>
      </div>  
    </div>
  )
}

export default MasInfo