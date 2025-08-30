import gsap from "gsap";
import Draggable from "gsap/Draggable";
gsap.registerPlugin(Draggable);

export function initSlider() {
const slider = document.querySelector(".slider");
const slides = document.querySelector(".slides");
const slide = document.querySelector(".slide");
const slideWidth = slide?.offsetWidth;
const slideLength = document.querySelectorAll(".slide").length;

const btnLeft = document.querySelector(".leftArrow");
const btnRight = document.querySelector(".rightArrow");
const fillLeftArrow = document.getElementById("sliderLeftArrow");
const fillRightArrow = document.getElementById("sliderRightArrow");

const availableClass = "bg-[#333]";
const disableClass = "bg-[#151515]";
const activeColor = "#999";
const disableColor = "#444";

let index = 0;
const gap = 16;

function updatePosition() {
  const totalMove = -(index * (slideWidth + gap)); // negativo porque mueves el contenedor hacia la izquierda
  console.log(totalMove);
  gsap.to(slides, {
    x: totalMove,
    duration: 0.4,
    ease: "sine.out",
  });
  if (index === 0) {
    btnLeft?.classList.remove(availableClass);
    btnLeft?.classList.add(disableClass);
    fillLeftArrow?.setAttribute("stroke", disableColor);
  } else if (index === slideLength - 1) {
    btnRight?.classList.remove(availableClass);
    btnRight?.classList.add(disableClass);
    fillRightArrow?.setAttribute("stroke", disableColor);
  } else {
    btnLeft?.classList.remove(disableClass);
    btnLeft?.classList.add(availableClass);
    btnRight?.classList.remove(disableClass);
    btnRight?.classList.add(availableClass);
    fillLeftArrow?.setAttribute("stroke", activeColor);
    fillRightArrow?.setAttribute("stroke", activeColor);
  }
}

function moveRight() {
  if (index < slideLength - 1) {
    index++;
    updatePosition();
  }
}

function moveLeft() {
  if (index > 0) {
    index--;
    updatePosition();
  }
}

btnLeft?.addEventListener("click", moveLeft);
btnRight?.addEventListener("click", moveRight);

Draggable.create(slides, {
  type: "x",
  bounds: {
    minX: -(slideWidth + gap) * (slideLength - 1),
    maxX: 0,
  },
  inertia: false, // <-- lo quitamos para evitar rebotes
  onDragEnd: function () {
    const draggedX = this.endX;
    const delta = draggedX + index * (slideWidth + gap); // desplazamiento desde el slide actual

    if (delta < -((slideWidth + gap) / 4) && index < slideLength - 1) {
      index++;
    } else if (delta > (slideWidth + gap) / 4 && index > 0) {
      index--;
    }

    updatePosition();
  },
});
}