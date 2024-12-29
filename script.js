let tl = gsap.timeline();
tl.from(".logo, header ul", {
    y: -100,
    duration: 1,
    delay: 0.5,
    stagger: 0.2,
    opacity: 0
})
tl.from(".intro", {
    y: 100,
    opacity: 0
})
tl.from(".herosec-txt", {
    y: 50,
    opacity: 0
})
tl.from(".page2 .box1", {
    y: -150,
    opacity: 0,
    duration: 2,
    // stagger: 0.3,
    scale: 1.2,
    scrollTrigger: {
        trigger: ".page2 .box1",
        scroller: "body",
        scrub: 1,
        // markers: true 
    }
})
tl.from(".page2 .box2", {
    y: -150,
    opacity: 0,
    duration: 2,
    scale: 1.2,
    // stagger: 0.3,
    scrollTrigger: {
        trigger: ".page2 .box2",
        scroller: "body",
        scrub: 1
    }
})
tl.from(".page3 h2", {
    transform: "translateX(-250%)",
    scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        duration: 2,
        // markers: true,
        scrub: 4,
        pin: true
    }
})
tl.from(".page4 .left", {
    x: -100,
    opacity: 0,
    duration: 2,
    stagger: 0.5,
    // scale: 1.5,
    scrollTrigger: {
        trigger: ".page4 .left",
        scroller: "body",
        scrub: 2
    }
})
tl.from(".page4 .right", {
    x: 100,
    opacity: 0,
    duration: 2,
    stagger: 2,
    // scale: 1.5,
    scrollTrigger: {
        trigger: ".page4 .right",
        scroller: "body",
        scrub: 2
    }
})


