import React from 'react'
import style from "./MasInfoNav.module.css"
import { Link } from 'react-router-dom'

const MasInfoNav = () => {
  return (
    <div className={style.backCont}>
        <Link to="/">
           <img className={style.Back} src="/arrow-left-solid.svg"/>
        </Link>
    </div>
  )
}

export default MasInfoNav