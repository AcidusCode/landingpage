/*document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("hidden");
});*/

import gsap from "gsap";

const btn = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-item");
const body = document.body;

let isOpen = false;

const tl = gsap.timeline({ paused: true });

tl.to(
  menu,
  {
    opacity: 1,
    height: "100vh",
    duration: 0.6,
    ease: "power2.out",
    onStart: () => {
      menu.style.pointerEvents = "auto";
      body.style.overflow = "hidden";
    },
  },
  "0.2"
);

tl.from(
  links,
  {
    x: 50,
    opacity: 0,
    stagger: 0.15,
    duration: 0.45,
    ease: "power2.out",
    delay: 0.15,
  },
  "-0.15"
); // comienza antes de que termine la anterior animacion

// Cuando la animación se revierte (menú cierra)
tl.eventCallback("onReverseComplete", () => {
  menu.style.pointerEvents = "none";
  // Quitamos bloqueo de scroll cuando termina la animación de cerrar
  body.style.overflow = "";
});

function setCloseIcon() {
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>`;
}
function setHamburgerIcon() {
  btn.innerHTML = `<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
    ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
      d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"
    ></path></svg
  >`;
}

btn?.addEventListener("click", () => {
  if (isOpen) {
    // animacion inversa
    tl.reverse();
    isOpen = false;
    setTimeout(() => {
      menu.style.pointerEvents = "none";
      setHamburgerIcon();
    }, 500); // cuando termine la animacion se desactivan los clicks
  } else {
    // reproduce el timeline
    tl.play();
    isOpen = true;
    setTimeout(() => {
      setCloseIcon();
    }, 500);
  }
});
