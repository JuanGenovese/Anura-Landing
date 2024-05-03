import React, {useEffect, useState} from 'react'
import style from "./NavBar.module.css"

const NavBar = () => {

  const [ prevScrollPos, setPrevScrollPos ] = useState(600)
  const [ visible, setVisible ] = useState(true)

  useEffect(() => {

    //handleScroll se encarga de modificar los estados locales de acuerdo a los cambios que ocurran en el desplazamiento en la ventana del navegador 
    const handleScroll = () => {
      
      //Si me escuentro posicionado lo mas arriba posible en la ventana del navegador, "visible" es true
      if (window.scrollY === 600) { 
        setVisible(true)
      } else if (window.scrollY < 600) {
        setVisible(false)
      } else {

        //posicion actual del desplazamiento (a cuantos pixeles del margen superior me encuentro posicionado)
        const currentScrollPos = window.scrollY
  
        //Compara la posicion actual de desaplazamiento con la posicion previa (en un pricipio   es 0).
        //Si la posicion previa es mayor a la actual, devuelve true
        //Si la posicion previa es menor a la actual, devuelve false
        //Basicamente lo que hace esta funcion es indicarnos si el desplazamiento es hacia   arribao hacia abajo
        //Para el uso que le estamos dando, nos sirve que sea true cuando nos estamos moviendo   hacia abajo
        const scrollDown = prevScrollPos > currentScrollPos;
        setVisible(scrollDown)
        setPrevScrollPos(currentScrollPos)
      }
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

  }, []) 

  return (

    <div className={`${style.NavBar} ${ visible ? style.NavBarVisible : style.NavBarHidden}`}>

       <img src="/AnurApp2.png" className={style.anurNav}/>
       <span> Sobre la app </span>
       <span> Equipo </span>
       <span> Más info </span>
        
    </div>
  )
}

export default NavBar