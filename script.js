if (typeof window !== "undefined" && "scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});

window.scrollTo({ top: 0, left: 0, behavior: "auto" });

window.addEventListener("scroll", () => {
  headerShadow();
  scrollActive();
});

const EMAIL_ADDRESS = "fatimaabubakaradamg@gmail.com";
const EMAIL_SUBJECT = "Project Inquiry — Let's Work Together";
const EMAIL_BODY = "Hello Fatima,\n\nI came across your portfolio and would like to discuss a project with you.\n\nProject details:\n";

function getHireMailtoLink() {
  return `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;
}

function bindHireMeButtons() {
  const hireButtons = document.querySelectorAll(".hire-me-btn");

  hireButtons.forEach((button) => {
    const mailtoLink = getHireMailtoLink();
    button.setAttribute("href", mailtoLink);
    button.setAttribute("aria-label", "Hire Fatima for a project");

    button.addEventListener("click", (event) => {
      if (button.tagName.toLowerCase() === "button") {
        event.preventDefault();
        window.location.href = mailtoLink;
      }
    });
  });
}

function setupRevealAnimations() {
  const revealElements = document.querySelectorAll(
    ".top-header, .about-info, .skills-panel, .skills-box, .experience-card, .project-card, .contact-info, .form-control"
  );

  if (!revealElements.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((element, index) => {
    element.classList.add("reveal-on-scroll");
    const baseDelay = element.classList.contains("skills-box") ? 110 : 80;
    element.style.transitionDelay = `${Math.min(index * baseDelay, 420)}ms`;
    revealObserver.observe(element);
  });
}

function setupMobileMenu() {
  const menuIcon = document.getElementById("menu-icon");
  const dropdownMenu = document.getElementById("dropdown-menu");

  if (!menuIcon || !dropdownMenu) return;

  const menuLinks = dropdownMenu.querySelectorAll("a");

  menuIcon.addEventListener("click", function (event) {
    event.stopPropagation();
    const isVisible = dropdownMenu.style.display === "block";
    dropdownMenu.style.display = isVisible ? "none" : "block";
    menuIcon.style.transform = isVisible ? "rotate(0deg)" : "rotate(180deg)";
  });

  document.addEventListener("click", function (event) {
    if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.style.display = "none";
      menuIcon.style.transform = "rotate(0deg)";
    }
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      dropdownMenu.style.display = "none";
      menuIcon.style.transform = "rotate(0deg)";
    });
  });
}

window.addEventListener("DOMContentLoaded", function () {
  bindHireMeButtons();
  setupMobileMenu();
  setupRevealAnimations();

  const menuIcon = document.getElementById("menu-icon");
  if (menuIcon) {
    menuIcon.style.transition = "transform 0.25s ease";
  }
});

function headerShadow() {
  const navHeader = document.getElementById("header");
  if (navHeader) {
    if (window.scrollY > 50) {
      navHeader.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
    } else {
      const isMobile = window.innerWidth <= 540;
      navHeader.style.boxShadow = "none";
      navHeader.style.height = isMobile ? "80px" : "90px";
    }
  }
}

if (document.querySelector(".typedText")) {
  new Typed(".typedText", {
    strings: [" a Certified Full-Stack Developer", " a Techpreneur", " a Digital Product Builder"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 30,
    backDelay: 2000,
  });
}

/* ----- ## -- MOBILE MENU TOGGLE -- ## ----- */
function myMenuFunction() {
  const menu = document.querySelector(".nav-menu");
  if (menu) menu.classList.toggle("active");
}

if (typeof ScrollReveal !== "undefined") {
  ScrollReveal().reveal(".featured-text-card", { origin: "bottom", distance: "20px", duration: 900, delay: 50, reset: false });
  ScrollReveal().reveal(".featured-name", { origin: "bottom", distance: "20px", duration: 900, delay: 100, reset: false });
  ScrollReveal().reveal(".featured-text-info", { origin: "bottom", distance: "20px", duration: 900, delay: 150, reset: false });
  ScrollReveal().reveal(".featured-text-btn", { origin: "bottom", distance: "20px", duration: 900, delay: 200, reset: false });
  ScrollReveal().reveal(".social_icons", { origin: "bottom", distance: "20px", duration: 900, delay: 250, reset: false });
  ScrollReveal().reveal(".featured-image", { origin: "bottom", distance: "20px", duration: 900, delay: 300, reset: false });

  ScrollReveal().reveal(".top-header", { origin: "bottom", distance: "20px", duration: 800, reset: false });
  ScrollReveal().reveal(".about-info", { origin: "bottom", distance: "20px", duration: 800, delay: 80, reset: false });
  ScrollReveal().reveal(".skills-panel-header", { origin: "bottom", distance: "20px", duration: 800, delay: 100, reset: false });
  ScrollReveal().reveal(".skills-box", { origin: "bottom", distance: "20px", duration: 800, interval: 90, delay: 120, reset: false });

  ScrollReveal().reveal(".experience-card", { origin: "bottom", distance: "25px", interval: 140, duration: 800, reset: false });
  ScrollReveal().reveal(".project-card", { origin: "bottom", distance: "25px", interval: 140, duration: 800, reset: false });
  ScrollReveal().reveal(".contact-info", { origin: "bottom", distance: "20px", duration: 800, delay: 80, reset: false });
  ScrollReveal().reveal(".form-control", { origin: "bottom", distance: "20px", duration: 800, delay: 120, reset: false });
}

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute("id");
    const link = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);
    const dropLink = document.querySelector(`#dropdown-menu a[href*="${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      if (link) link.classList.add("active-link");
      if (dropLink) dropLink.classList.add("active-link");
    } else {
      if (link) link.classList.remove("active-link");
      if (dropLink) dropLink.classList.remove("active-link");
    }
  });
}
  