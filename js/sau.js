window.onload = () => {
    gsap.to(".animation-text1-left", {
        scrollTrigger: {
            trigger: ".animation-text1-left",
            start: "top 100%",
            end: "bottom 100%",
            scrub: 0.5,
        },
    
        x: -887,
        duration: 10,    
    })  

    gsap.to(".animation-text2-right", {
        scrollTrigger: {
            trigger: ".animation-text2-right",
            start: "top 100%",
            end: "bottom 100%",
            scrub: 0.5,
        },
    
        x: 887,
        duration: 10,    
    }) 

    gsap.to(".animation-icon1-left", {
        scrollTrigger: {
            trigger: ".animation-icon1-left",
            start: "top 90%",
            end: "bottom 80%",
            scrub: 0.5,
        },
    
        x: -375,
        duration: 10,    
    }) 

    gsap.to(".animation-icon2-right", {
        scrollTrigger: {
            trigger: ".animation-icon2-right",
            start: "top 90%",
            end: "bottom 80%",
            scrub: 0.5,
        },
    
        x: 375,
        duration: 10,    
    }) 

    gsap.to(".animation-text3-opa", {
        scrollTrigger: {
            trigger: ".animation-text3-opa",
            start: "top 80%",
            end: "bottom 100%",
            scrub: 0.5,
        },
    
        opacity: 1,
        duration: 10,    
    }) 

    gsap.to(".animation-text4-right", {
        scrollTrigger: {
            trigger: ".animation-text4-right",
            start: "top 80%",
            end: "bottom 100%",
            scrub: 0.5,
        },
    
        x: 887,
        duration: 10,    
    })
}