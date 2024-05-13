import React from 'react'
import style from "./ThirdView.module.css"
import BDD from "../../../BDD.js"
import Profile from './Profile/Profile.jsx'

const ThirdView = () => {

  return (
    <div className={style.contenido2} id='equipo'>

      <div className={style.quienesSomos}>
        <p>Este proyecto fue desarrollado por integrantes del Instituto de Ecorregiones Andinas, INECOA, dependiente de la Universidad Nacional de Jujuy el CONICET. Formamos parte del Grupo de Investigación en Diversidad, Ecología y Conservación de Anfibios, que tiene una trayectoria de más de 20 años estudiando y monitoreando la diversidad de anfibios en la provincia, información que fue utilizada para realizar este catálogo.</p>
      </div>

      <div className={style.carrete}>
        {BDD && BDD.map ( profile => (
          <Profile key={profile.id} profile={profile}/>
        ))}
      </div>
        
    </div>
  )
}

export default ThirdView