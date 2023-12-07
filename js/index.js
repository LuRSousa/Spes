
window.onload = () => {
            
    gsap.to(".animation-card-left", {
    scrollTrigger: {
        trigger: ".animation-card-left",
        start: "top 80%",
        end: "bottom 150%",
        scrub: 0.5,
    },

        x: -600,
        duration: 10,    
    })

    gsap.to(".animation-card-right", {
        scrollTrigger: {
            trigger: ".animation-card-right",
            start: "top 80%",
            end: "bottom 150%",
            scrub: 0.5,
        },
    
        x: 600,
        duration: 10,     
    })

    gsap.to(".animation-idea-opa", {
        scrollTrigger: {
            trigger: ".animation-idea-opa",
            start: "top 60%",
            end: "bottom 100%",
            scrub: 0.5,
        },
    
        opacity: 1,
        duration: 10,     
    })
}

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}