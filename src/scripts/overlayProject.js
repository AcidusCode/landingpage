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
 btn?.addEventListener("click", () => {
    // 1. Medimos posición y tamaño original
    const rect = projectCard.getBoundingClientRect();

    // 2. Convertimos a fixed en la misma posición que tenía
    projectCard.style.position = "fixed";
    projectCard.style.top = `${rect.top}px`;
    projectCard.style.left = `${rect.left}px`;
    projectCard.style.width = `${rect.width}px`;
    projectCard.style.height = `${rect.height}px`;
    projectCard.style.margin = 0; // importante para evitar desplazamiento

    // 3. Forzamos el z-index para que se vea arriba
    projectCard.style.zIndex = 999;

    // 4. Animamos al tamaño de la pantalla
    gsap.to(projectCard, {
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      duration: 0.6,
      ease: "power2.out",
      onStart: () => {
        document.body.style.overflow = "hidden";
      },
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
})*/