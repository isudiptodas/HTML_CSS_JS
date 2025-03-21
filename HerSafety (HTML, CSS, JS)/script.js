const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true
});

function videocon_animation(){
let videocon = document.querySelector(".video-container")
let videoplay = document.querySelector(".play")

videocon.addEventListener("mouseenter",function(){
  gsap.to(videoplay,{
    scale: 1, opacity: 1
  })
})

videocon.addEventListener("mouseleave",function(){
  gsap.to(videoplay,{
    scale: 0, opacity: 0
  })
})

videocon.addEventListener("mousemove",function(dets){
  gsap.to(videoplay,{
    left: dets.x-10,
    top: dets.y-10
  })
})
}

videocon_animation()

function loading_animation(){
  gsap.from(".page1 h1",{
  y: 100,
  opacity: 0,
  delay: 0.5,
  duration: 1,
  stagger: 0.3
})

gsap.from(".page1 .video-container",{
  opacity: 0,
  scale: 0.9,
  delay: 1.3,
  duration: 1,
})
}

loading_animation()

function elem_animation(){
  gsap.from(".page2 .elem",{
  opacity: 0,
  scale: 0.9,
  delay: 1.3,
  duration: 1,
})
}

elem_animation()

document.addEventListener("mousemove", function(dets){
  gsap.to(".cursor",{
    left: dets.x,
    top: dets.y
  })
})