let heroh2 = document.querySelectorAll(".hero-section h2");
let heroSection = document.querySelectorAll(".hero-section");
let navImg = document.querySelector(".nav img");
let navPara = document.querySelectorAll(".nav p");
let navIcon = document.querySelectorAll(".nav i");
let heroVideo = document.querySelector(".hero-section video");
let heroVideo2 = document.querySelector(".video-container video");
let videoContainer = document.querySelector(".video-container");
let searchIcon = document.querySelector(".fa-magnifying-glass");
let searchBox = document.querySelector(".nav input");
let box = document.querySelectorAll(".boxes .box");
let card1 = document.querySelectorAll(".card-section .card1");
let card2 = document.querySelectorAll(".card-section .card2");
let card3 = document.querySelectorAll(".card-section .card3");
let cursor = document.querySelector(".cursor");
let links = document.querySelectorAll(".page4 .links p");
let page3 = document.querySelectorAll(".page3");

gsap.registerPlugin(ScrollTrigger);

let isPlaying = false;

heroVideo.pause();
heroVideo2.pause();
heroVideo.style.opacity = '0';
heroVideo2.style.opacity = '0';

function playVideo(){
    if(!isPlaying){
        heroVideo.play();
        heroVideo2.play();
        heroVideo.style.opacity = 1,
        heroVideo.style.transition = '0.2s ease-in',
        heroVideo2.style.opacity = 1,
        heroVideo2.style.transition = '0.2s ease-in',
        isPlaying = true;
    }
}

let tl = gsap.timeline({
    onComplete: playVideo
});

tl.from(navImg, {
    y:-100,
    scale: 0,
    duration: 1
})
.from(navPara, {
    y: -100,
    opacity: 0,
    duration: 1, 
    stagger: 0.1
})

.from(navIcon, {
    y: -100,
    opacity: 0,
    duration: 0.5, 
    stagger: 0.1
})

.from(searchBox, {
    y: -100,
    opacity: 0,
    duration: 0.5, 
    stagger: 0.1
})

.from(heroh2, {
    y: 200,
    opacity: 0,
    scale: 0,
    duration: 0.5,
    stagger: 0.2
})

// gsap.to(box, {
//     transform: 'translateX(-200%)',
//     duration: 10,
//     repeat: -1,
//     ease: "none",
// }) 

gsap.from(card1, {
    opacity: -4,
    transform: 'translateY(-150%)',
    duration: 0.2,
    scrollTrigger: {
        trigger: card1,
        scrub: 3
    }
})

gsap.from(card2, {
    opacity: -4,
    transform: 'translateX(-150%)',
    duration: 0.2,
    scrollTrigger: {
        trigger: card1,
        scrub: 3
    }
})

gsap.from(card3, {
    opacity: -4,
    transform: 'translateX(150%)',
    duration: 0.2,
    scrollTrigger: {
        trigger: card1,
        scrub: 3
    }
})

gsap.to(heroVideo2,{
    scale: 2,
    duration: 1,
    scrollTrigger: {
        trigger: heroVideo2,
        start: "top 60%",
        end: "bottom 80%",
        scrub: 2,
        // markers: true
    }
})

gsap.from(links, {
    opacity: 0, 
    y: -100,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: links, 
        scrub: 3,
        // markers: true,
        end: "top 50%",
        start: "top 80%"
    }
})

gsap.from(page3, {
    backgroundColor: "black",
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: page3, 
        scrub: 3,
        // markers: true,
        end: "top 8%",
        start: "top 40%"
    }
})
