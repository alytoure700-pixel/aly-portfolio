/* =========================================================
   MAIN.JS — comportements de l'interface
   1. Menu mobile (ouvrir / fermer)
   2. Bordure de la navbar au défilement
   3. Lien actif dans le menu selon la section visible
   4. Année automatique dans le footer
   ========================================================= */


/* ---------- 1. Menu mobile ---------- */

const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");
const navLinks = document.querySelectorAll(".nav__link");

function openMenu() {
  menu.classList.add("is-open");
  toggle.setAttribute("aria-expanded", "true");
  toggle.setAttribute("aria-label", "Fermer le menu");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  menu.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Ouvrir le menu");
  document.body.classList.remove("menu-open");
}

toggle.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  isOpen ? closeMenu() : openMenu();
});

// Fermer le menu quand on clique sur un lien (sinon il resterait ouvert)
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Fermer avec la touche Échap, et rendre le focus au bouton burger
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.classList.contains("is-open")) {
    closeMenu();
    toggle.focus();
  }
});

// Si on agrandit la fenêtre au-delà du format mobile, on referme le menu
window.matchMedia("(min-width: 881px)").addEventListener("change", (e) => {
  if (e.matches) closeMenu();
});


/* ---------- 2. Bordure de la navbar au défilement ---------- */

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();


/* ---------- 3. Lien actif selon la section visible ----------
   IntersectionObserver prévient le navigateur quand une section
   entre dans une zone de l'écran : pas besoin de calculer
   la position de chaque section à chaque défilement. */

const sections = document.querySelectorAll("main section[id]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("is-active", isCurrent);
        if (isCurrent) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    });
  },
  // La section est "active" quand elle traverse une bande au milieu de l'écran
  { rootMargin: "-45% 0px -50% 0px" }
);

sections.forEach((section) => observer.observe(section));


/* ---------- 4. Année du footer ---------- */

const yearEl = document.querySelector("[data-year]");
if (yearEl) yearEl.textContent = new Date().getFullYear();
