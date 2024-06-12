import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin( ScrollTrigger );

export const FirstViewAnimations = (elemento1, elemento2, elemento3, elemento4) => {
    const tl = gsap.timeline() 


    gsap.fromTo(
        elemento1, 
        {opacity:0, x:-45,},
        { x:0, opacity: 1, duration: 1,  ease: "power1.out"}
    )
    

    gsap.fromTo(
        elemento2, 
        { opacity:0, x:-100,},
        { x:0, y:0, opacity: 1, duration: 1.3,  ease: "power1.out"}
    )


    tl.fromTo(
        elemento3, 
        { opacity:0, x:-200,},
        { x:0, opacity: 1, duration: 1.5,  ease: "power1.out"}
    ).fromTo(
        elemento4, 
        { opacity:0,},
        { opacity: 1, duration: 2, ease: "power1.out"}
    )


}

export const SecondViewAnimations = (elemento1) => {
    gsap.fromTo(elemento1, 
        {
            scrollTrigger: {
              trigger: elemento1,
              start: "top 75%",
              end: "top 25%",
            },
            x:0,
            ease:"power1.inOut"
        }
    )
}