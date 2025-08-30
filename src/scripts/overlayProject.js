import gsap from "gsap";
import {initSlider} from "./initSlider.js"

const buttons = document.querySelectorAll(".btn-show-project");
const overlay = document.getElementById("project-overlay");
const content = document.getElementById("project-content");
const detalle = document.getElementById("project-details");
const cerrarBtn = document.getElementById("close-overlay");

const projectCard = document.getElementById("projectCard");

/*buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const casoId = btn.dataset.case;
    const html = casos[casoId];

    if (html) {
      detalle.innerHTML = html;
      overlay.classList.remove("hidden");

      gsap.to(content, {
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      });

      // Bloquear scroll del fondo
      document.body.style.overflow = "hidden";
    }
  });
});*/

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    overlay.classList.remove("hidden");

    gsap.to(content, {
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    });
    initSlider();
    // Bloquear scroll del fondo
    document.body.style.overflow = "hidden";
  });
});

cerrarBtn.addEventListener("click", () => {
  gsap.to(content, {
    y: "100%",
    duration: 0.5,
    ease: "power2.in",
    onComplete: () => {
      overlay.classList.add("hidden");
      document.body.style.overflow = "";
      //detalle.innerHTML = ""; // limpiar contenido
    },
  });
});

/*buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    projectCard.classList.remove("relative");
    projectCard.classList.add("fixed");

    gsap.to(projectCard, {
      height: "100vh",
      width: "100vw",
      top: 0,
      bottom: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    // Bloquear scroll del fondo
    document.body.style.overflow = "hidden";
  });
});

cerrarBtn.addEventListener("click", () => {
  gsap.to(content, {
    y: "100%",
    duration: 0.5,
    ease: "power2.in",
    onComplete: () => {
      overlay.classList.add("hidden");
      document.body.style.overflow = "";
      //detalle.innerHTML = ""; // limpiar contenido
    },
  });
});*/