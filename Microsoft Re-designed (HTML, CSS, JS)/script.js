window.addEventListener("load", () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".header h1", {
        opacity: 0,
        y: -20,
        stagger: 0.3,
        delay: 4
    })
    
    gsap.from("main .divider", {
        opacity: 0,
        x: -20,
        duration: 1.5,
        scrollTrigger: {
            trigger: "main .divider",
            scroller: "body",
            scrub: 2,
            // markers: true,
            start: "top 80%",
            end: "top 20%",
            // onEnter: () => ScrollTrigger.refresh()
        }
    });
    
    gsap.from(".page1 .ms-apps img",{
        opacity: 0,
        scale: 1.8,
        x: -30,
        duration: 1.1,
        scrollTrigger: {
            trigger: ".page1 .ms-apps img",
            // markers: true,
            start: "top 70%",
            end: "bottom 70%",
            scrub: 2,
            // onEnter: () => ScrollTrigger.refresh()
        }
    });
    
    gsap.from(".page1 .ms-apps-info h1, .page1 .ms-apps-info p, .page1 .ms-apps-info button",{
        opacity: 0,
        scale: 1.8,
        x: 5,
        duration: 2,
        scrollTrigger: {
            trigger: ".page1 .ms-apps-info h1, .page1 .ms-apps-info p, .page1 .ms-apps-info button",
            // markers: true,
            start: "top 80%",
            end: "bottom 80%",
            scrub: 2,
            // onEnter: () => ScrollTrigger.refresh()
        }
    });
    
    gsap.from("main .divider2", {
        opacity: 0,
        scale: 1.1,
        duration: 1,
        scrollTrigger: {
            trigger: "main .divider",
            scroller: "body",
            scrub: 2,
            // markers: true,
            start: "top 10%",
            end: "top 20%",
            // onEnter: () => ScrollTrigger.refresh()
        }
    });

    gsap.from("main .page2 .box", {
        opacity: 0,
        scale: 2,
        duration: 1,
        scrollTrigger: {
            trigger: "main .page2 .box",
            scroller: "body",
            scrub: 2,
            // markers: true,
            start: "top 10%",
            end: "top 20%",
            // onEnter: () => ScrollTrigger.refresh()
        }
    });

    gsap.from("main .page3 .img1", {
        opacity: 0,
        scale: 2,
        duration: 1,
        x: -100,
        scrollTrigger: {
            trigger: "main .page3 .img1",
            scroller: "body",
            scrub: 2,
            // markers: true,
            start: "top 50%",
            end: "top 20%",
            // onEnter: () => ScrollTrigger.refresh()
        }
    });

    gsap.from("main .page3 .img3", {
        opacity: 0,
        scale: 2,
        duration: 1,
        x: -100,
        scrollTrigger: {
            trigger: "main .page3 .img3",
            scroller: "body",
            scrub: 2,
            // markers: true,
            start: "top 50%",
            end: "top 20%",
            // onEnter: () => ScrollTrigger.refresh()
        }
    });

    gsap.from("main .page3 .img2", {
        opacity: 0,
        scale: 2,
        duration: 1,
        x: 100,
        scrollTrigger: {
            trigger: "main .page3 .img2",
            scroller: "body",
            scrub: 2,
            // markers: true,
            start: "top 50%",
            end: "top 20%",
            // onEnter: () => ScrollTrigger.refresh()
        }
    });

    gsap.from("main .page3 .img4", {
        opacity: 0,
        scale: 2,
        duration: 1,
        x: 100,
        scrollTrigger: {
            trigger: "main .page3 .img4",
            scroller: "body",
            scrub: 2,
            // markers: true,
            start: "top 50%",
            end: "top 20%",
            // onEnter: () => ScrollTrigger.refresh()
        }
    });

    gsap.from("main .page4 .gamepass", {
        opacity: 0,
        scale: 2,
        duration: 1,
        scrollTrigger: {
            trigger: "main .page4 .gamepass",
            scroller: "body",
            scrub: 2,
            // markers: true,
            start: "top 30%",
            end: "top 20%",
            // onEnter: () => ScrollTrigger.refresh()
        }
    });

    gsap.from("main .page5 .box1", {
        opacity: 0,
        // scale: 2,
        x: -100,
        duration: 1,
        scrollTrigger: {
            trigger: "main .page5 .box1",
            scroller: "body",
            scrub: 2,
            // markers: true,
            start: "top 50%",
            end: "top 20%",
            // onEnter: () => ScrollTrigger.refresh()
        }
    });

    gsap.from("main .page5 .box2", {
        opacity: 0,
        scale: 2,
        duration: 1,
        scrollTrigger: {
            trigger: "main .page5 .box2",
            scroller: "body",
            scrub: 2,
            // markers: true,
            start: "top 30%",
            end: "top 20%",
            // onEnter: () => ScrollTrigger.refresh()
        }
    });

    gsap.from("main .page5 .box3", {
        opacity: 0,
        // scale: 2,
        x: 100,
        duration: 1,
        scrollTrigger: {
            trigger: "main .page5 .box3",
            scroller: "body",
            scrub: 2,
            // markers: true,
            start: "top 50%",
            end: "top 20%",
            // onEnter: () => ScrollTrigger.refresh()
        }
    });
});

let allMicrosoft = document.querySelector(".dropdown-menu p");
let allMicrosoftPage = document.querySelector(".all-microsoft");
let intro = document.querySelector(".intro");
let introImg = document.querySelector(".intro img");

let pageFlag = true;

allMicrosoft.addEventListener("click", () => {
    if(pageFlag == true){
        allMicrosoftPage.style.display = 'initial';
        allMicrosoftPage.style.display = 'flex';
        setTimeout(() => {
            allMicrosoftPage.style.transform = 'translateY(0)';
            allMicrosoftPage.style.opacity = '1';
            allMicrosoftPage.style.visibility = 'visible';
        }, 10);
        pageFlag = false;
    }
    else{
        allMicrosoftPage.style.transform = 'translateY(-100%)';
        allMicrosoftPage.style.opacity = '0';
        allMicrosoftPage.style.visibility = 'hidden';
        setTimeout(() => {
            allMicrosoftPage.style.display = 'none';
        }, 500);
        
        pageFlag = true;
    }
});

setTimeout(() => {
    intro.style.transform = 'translateY(-100%)';
},3000);

gsap.from(".intro img", {
    opacity: 0,
    duration: 0.7,
    delay: 1
});