import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initScrollSpy() {
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onEnter: () => setActive(section),
      onEnterBack: () => setActive(section),
    });
  });

  function setActive(section) {
    const id = section.getAttribute("id");

    document.querySelectorAll(".nav-item-desktop").forEach(link => {
      link.classList.remove("bg-[rgba(0,102,197,1)]", "text-[#eee]");
      if (link.getAttribute("href") === `#${id}`) {
        link.classList.add("bg-[rgba(0,102,197,1)]", "text-[#eee]");
      }
    });
  }
}