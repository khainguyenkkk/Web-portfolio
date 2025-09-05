const navbarToggle = document.querySelector(".toggle");
const navbarMenu = document.querySelector(".navbar ul");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});
gsap.registerPlugin(ScrollTrigger);

let container = document.querySelector(".demo");
let sections = gsap.utils.toArray(".video");

gsap.to(container, {
  x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: ".connect",
    pin: true,
    scrub: 1,
    end: () => "+=" + (container.scrollWidth - document.documentElement.clientWidth)
  }
});
sap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".reveal").forEach((el) => {
  gsap.to(el, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 80%",   // when element's top hits 80% of viewport
      toggleActions: "play none none reverse"
    }
  });
});