document.addEventListener("DOMContentLoaded", () => {
  // 🔹 NAVIGASI STICKY & ACTIVE LINK 🔹
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    // Efek scroll pada navbar
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Menandai link navigasi yang aktif berdasarkan posisi scroll
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // 🔹 HAMBURGER MENU (MOBILE) 🔹
  const hamburger = document.getElementById("hamburger-menu");
  const mobileNav = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      mobileNav.classList.toggle("active");
      const icon = hamburger.querySelector("i");
      if (mobileNav.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileNav.classList.contains("active")) {
        mobileNav.classList.remove("active");
        const icon = hamburger.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  });

  // 🔹 DARK/LIGHT MODE TOGGLE 🔹
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const themeIcon = themeToggle?.querySelector("i");

  themeToggle?.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");

    if (body.classList.contains("light-mode")) {
      themeIcon?.classList.remove("fa-sun");
      themeIcon?.classList.add("fa-moon");
    } else {
      themeIcon?.classList.remove("fa-moon");
      themeIcon?.classList.add("fa-sun");
    }
  });

  // 🔹 MUSIC PLAYER 🔹
  const musicToggle = document.getElementById("music-toggle");
  const music = document.getElementById("background-music");
  const musicIcon = musicToggle?.querySelector("i");
  let isPlaying = false;

  if (music) music.volume = 0.1;

  musicToggle?.addEventListener("click", () => {
    if (!music) return;
    if (isPlaying) {
      music.pause();
      musicIcon?.classList.remove("fa-volume-high");
      musicIcon?.classList.add("fa-volume-mute");
    } else {
      music.play();
      musicIcon?.classList.remove("fa-volume-mute");
      musicIcon?.classList.add("fa-volume-high");
    }
    isPlaying = !isPlaying;
  });

  // 🔹 PORTFOLIO FILTER FIXED 🔹
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioGrid = document.querySelector(".portfolio-grid");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Hapus semua 'active'
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      // Reset class layout
      portfolioGrid?.classList.remove("all-mode", "category-mode");

      // Sembunyikan semua item dulu
      portfolioItems.forEach((item) => {
        item.style.display = "none";
      });

      if (filter === "all") {
        portfolioGrid?.classList.add("all-mode");
        portfolioItems.forEach((item) => {
          item.style.display = "block";
        });
      } else {
        portfolioGrid?.classList.add("category-mode");
        portfolioItems.forEach((item) => {
          if (item.classList.contains(filter)) {
            item.style.display = "block";
          }
        });
      }
    });
  });
});
