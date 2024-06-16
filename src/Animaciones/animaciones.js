import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin( ScrollTrigger );



export const IzqADer = (elemento) => {

    gsap.fromTo(elemento, 
        {
            x:-200
        },
        {
            x:0,
            ease:"power1.inOut",
            scrollTrigger: {
              trigger: elemento,
              start: "top 100%",
              end: "bottom center",
            },
            
            
        }
    )
}

export const DerAIzq = (elemento) => {

    gsap.fromTo(elemento, 
        {
            x:200
        },
        {
            x:0,
            ease:"power1.inOut",
            scrollTrigger: {
              trigger: elemento,
              start: "top 100%",
              end: "top center",
            },
            
        }
    )
}

export const aparecer = (elemento, x = 0.5) => {

    gsap.fromTo(elemento, 
        {
            opacity:0
        },
        {
            opacity: 1,
            duration: x,
            ease:"power1.inOut",
            scrollTrigger: {
              trigger: elemento,
              start: "top 100%",
              end: "top center",
            },
            
        }
    )
}









export const FirstViewAnimations = (elemento1, elemento2, elemento3, elemento4) => {
    const tl = gsap.timeline() 


    gsap.fromTo(
        elemento1, 
        {
            opacity:0, 
            x:-45
        },
        { 
            x:0, opacity: 1, 
            duration: 0.6,  
            ease: "power1.out"
        }
    )
    

    gsap.fromTo(
        elemento2, 
        { 
            opacity:0, 
            x:-100,
        },
        { 
            x:0, 
            y:0, 
            opacity: 1, 
            duration: 0.9,  
            ease: "power1.out"
        }
    )


    tl.fromTo(
        elemento3, 
        { 
            opacity:0, 
            x:-200
        },
        { 
            x:0, 
            opacity: 1, 
            duration: 0.9,  
            ease: "power1.out"
        }
    ).fromTo(
        elemento4, 
        { 
            opacity:0
        },
        { 
            opacity: 1, 
            duration: 1.5, 
            ease: "power1.out"
        }
    )


}

