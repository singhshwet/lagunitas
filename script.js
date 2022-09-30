var tl = gsap.timeline();

tl.to("#bottle",{
    scrollTrigger:{
        trigger:"#bottle",
        start:"top 20%",
        end:"bottom 55%",
        scrub:1.5,
        // markers:true
    },
    x:"-30%",
    y:"5%",
    rotate:"-15deg",
    // duration:2,
    opacity:1.5,
    ease:"Expo.easeInOut"
})

gsap.to("#bottle",{
    scrollTrigger:{
        trigger:"#page5",
        start:"top 100%",
        end:"bottom 60%",
        scrub:2,
        // markers:true
    },
    // rotate:"-15deg",
    // duration:2,
    scale: 0.58,
    
    ease:"Expo.easeInOut"
})
gsap.to("#bottle",{
    scrollTrigger:{
        trigger:"#page5",
        start:"bottom 120%",
        end:"bottom 120%",
        scrub:2,
        // markers:true
    },
    // rotate:"-15deg",
    // duration:2,
    opacity:0,
    // ease:"Expo.easeInOut"
})
gsap.to("#opacity",{
    scrollTrigger:{
        trigger:"#page5",
        start:"bottom 120%",
        end:"bottom 120%",
        scrub:2,
        // markers:true
    },

    // duration:2,
    opacity:1,
    ease:"Expo.easeInOut"
})








