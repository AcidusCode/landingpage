/*document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("hidden");
});*/

import gsap from "gsap";

const btn = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-item");
const body = document.body;

let isOpen = false;

const tl = gsap.timeline({paused: true});

tl.to(menu, {
  opacity: 1,
  height: "100vh",
  duration: 0.6,
  ease: "power2.out",
  onStart: () => {
    menu.style.pointerEvents = "auto";
    body.style.overflow = "hidden";
  },
}, "0.2");

tl.from(links, {
  x: 50,
  opacity: 0,
  stagger: 0.15,
  duration: 0.45,
  ease: "power2.out",
  delay: 0.15,
}, "-0.15"); // comienza antes de que termine la anterior animacion

// Cuando la animación se revierte (menú cierra)
tl.eventCallback("onReverseComplete", () => {
  menu.style.pointerEvents = "none";
  // Quitamos bloqueo de scroll cuando termina la animación de cerrar
  body.style.overflow = "";
});

btn?.addEventListener("click", () => {
  if (isOpen) {
    // animacion inversa
    tl.reverse();
    isOpen = false;
    setTimeout(() => {
      menu.style.pointerEvents = "none";
    }, 500); // cuando termine la animacion se desactivan los clicks
  } else {
    // reproduce el timeline
    tl.play();
    isOpen = true;
  }
});
