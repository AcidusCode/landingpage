export function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-item-desktop");

  let ticking = false;

  function updateActiveSection() {
    let closest = null;
    let closestDistance = Infinity;
    let offset = 50;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2 + offset;
      const distance = Math.abs(viewportCenter - sectionCenter);

      if (distance < closestDistance) {
        closest = section;
        closestDistance = distance;
      }
    });

    if (closest) {
      const id = closest.getAttribute("id");

      navLinks.forEach(link => {
        link.classList.remove("bg-[rgba(0,102,197,1)]", "text-[#eee]");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("bg-[rgba(0,102,197,1)]", "text-[#eee]");
        }
      });
    }
  }

  // Use scroll + resize events with requestAnimationFrame to throttle
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", onScroll);

  // Trigger initial run
  updateActiveSection();
}