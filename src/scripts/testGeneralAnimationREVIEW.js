gsap.utils.toArray(".reveal-section").forEach(section => {
  const items = section.querySelectorAll(".reveal-item");
  
  gsap.from(items, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
  });
});