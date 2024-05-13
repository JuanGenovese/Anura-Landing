import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import style from "./NavBar.module.css"

const NavBar = () => {

  const [ prevScrollPos, setPrevScrollPos ] = useState(575)
  const [ visible, setVisible ] = useState(false)

  useEffect(() => {

    //handleScroll se encarga de modificar los estados locales de acuerdo a los cambios que ocurran en el desplazamiento en la ventana del navegador 
    const handleScroll = () => { 
      
      if (window.scrollY < 575) setVisible(false)
      //posicion actual del desplazamiento (a cuantos pixeles del margen superior meencuentro posicionado)
      const currentScrollPos = window.scrollY

      //Compara la posicion actual de desaplazamiento con la posicion previa (en un principio es 0).
      //Si la posicion previa es menor a la actual devuelve true sino, false
      //Basicamente lo que hace esta funcion es indicarnos si el desplazamiento es hacia  arribao hacia abajo
      //Para el uso que le estamos dando, nos sirve que sea true cuando nos estamosmoviendo   hacia abajo
      const scrollDown = prevScrollPos < currentScrollPos;

      setVisible(scrollDown)
      setPrevScrollPos(currentScrollPos)
      
    }

    //"window" es un objeto global de JS que me permite acceder a varias propiedades de la ventana del navegador
    //"addEventListenener" es un metodo nativo de JS que me permite estar atento a cambios, en este caso, en el desplazamiento de la ventana.
    //Cuando suceda algun cambio en el "scroll", se ejecutará la funcion "handleScroll"
    window.addEventListener("scroll", handleScroll);
    
    //Se ejecuta una vez que el componente de desmonta
    return () => {
      //Remueve el event listener (ya no estará atento a cambios en el scroll)
      window.removeEventListener("scroll", handleScroll)
    }

  }, [window.scrollY]) 

  return (

    <div className={`${style.NavBar} ${ visible ? style.NavBarVisible : style.NavBarHidden}`}>

      <a href="#Anura"><img src="/AnurApp2.png" className={style.anurNav}/></a>
       
      <a href="#sobre-app"><span> Sobre la app </span></a>
      <a href="#equipo"><span> Equipo </span></a>
      <Link to="/masinfo"><span> Más info </span></Link>
        
    </div>
  )
}

export default NavBar