window.onload = () => {


     gsap.to(".animation-text1-top", {
         scrollTrigger: {
             trigger: ".animation-text1-top",
             start: "top 100%",
             end: "bottom 100%",
             scrub: 0.5,
         },
        
         opacity: 1,
          y: -500,
         duration: 1000,    
     }) 

     gsap.to(".animation-text2-top", {
         scrollTrigger: {
             trigger: ".animation-text2-top",
             start: "top 100%",
             end: "bottom 100%",
             scrub: 0.5,
         },
        
     opacity: 1,
        y: -500,
         duration: 1000,    
     }) 

     gsap.to(".animation-icon-opa", {
         scrollTrigger: {
             trigger: ".animation-icon-opa",
             start: "top 80%",
             end: "bottom 100%",
             scrub: 0.5,
         },
        
         opacity: 1,
         duration: 1000,    
     }) 

     gsap.to(".green", {
         scrollTrigger: {
             trigger: ".green",
             start: "top 120%",
             end: "bottom 100%",
            scrub: 0.5,
         },
        
        opacity: 1,
         x: -887,
         duration: 1000,    
    })
}