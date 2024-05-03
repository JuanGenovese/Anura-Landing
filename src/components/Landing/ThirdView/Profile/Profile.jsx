import React from 'react'
import style from "./Profile.module.css"

const Profile = ({profile}) => {
  return (
    <div className={style.integrante}>

        <img className={style.perfil} src="/imagen-perfil-sin-foto.jpg"/>
        <p className={style.nombre}> {profile.name}</p>
        <p className={style.funcion}> {profile.category} </p>

    </div>
  )
}

export default Profile