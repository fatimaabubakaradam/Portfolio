window.addEventListener("scroll", () => {
    headerShadow();
    scrollActive();
  });
  document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const menuLinks = dropdownMenu.querySelectorAll("a");
  
    menuIcon.addEventListener("click", function () {
        if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none";
        } else {
            dropdownMenu.style.display = "block";
        }
    });
  
    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });
  
    // Close the dropdown menu when a link is clicked
    menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            dropdownMenu.style.display = "none";
        });
    });
  });
  
  
  
  // ✅ Navbar Shadow on Scroll
  function headerShadow() {
    const navHeader = document.getElementById("header");
    if (navHeader) {
      if (window.scrollY > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
      } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
      }
    }
  }
  
  // ✅ Typed.js Effect (Check if it exists before using)
  if (document.querySelector(".typedText")) {
    new Typed(".typedText", {
      strings: ["Versatile Web Developer", "Interface Designer", "Interactive Designer"],
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
  
  // ✅ ScrollReveal Animations (Check if ScrollReveal is defined)
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal(".featured-text-card", { origin: "top", distance: "80px", duration: 2000, reset: true });
    ScrollReveal().reveal(".featured-name", { delay: 100 });
    ScrollReveal().reveal(".featured-text-info", { delay: 200 });
    ScrollReveal().reveal(".featured-text-btn", { delay: 200 });
    ScrollReveal().reveal(".social_icons", { delay: 200 });
    ScrollReveal().reveal(".featured-image", { delay: 300 });
  
    ScrollReveal().reveal(".project-box", { interval: 200 });
  
    ScrollReveal().reveal(".top-header");
    ScrollReveal().reveal(".about-info", { origin: "left", delay: 100 });
    ScrollReveal().reveal(".contact-info", { origin: "left", delay: 100 });
  
    ScrollReveal().reveal(".skills-box", { origin: "right", delay: 100 });
    ScrollReveal().reveal(".form-control", { origin: "right", delay: 100 });
  }
  
  // ✅ Scroll Active Function (Only Declared Once)
  const sections = document.querySelectorAll("section[id]");
  
  function scrollActive() {
    const scrollY = window.scrollY;
  
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");
      const link = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);
  
      if (link) {
        scrollY > sectionTop && scrollY <= sectionTop + sectionHeight
          ? link.classList.add("active-link")
          : link.classList.remove("active-link");
      }
    });
  }
  