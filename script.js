// Smoothly reveal sections on scroll
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
