/* =========================================================
   MAIN.JS — comportements de l'interface
   1. Menu mobile (ouvrir / fermer)
   2. Bordure de la navbar au défilement
   3. Lien actif dans le menu selon la section visible
   4. Année automatique dans le footer
   5. Apparition douce des blocs au défilement
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
window.matchMedia("(min-width: 1001px)").addEventListener("change", (e) => {
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


/* ---------- 5. Apparition douce des blocs au défilement ----------
   Chaque bloc démarre légèrement transparent et décalé vers le bas,
   puis apparaît quand il entre à l'écran.
   - Sans JavaScript, ou sur un vieux navigateur, rien n'est caché :
     la classe "has-reveal" n'est ajoutée que si tout est supporté.
   - Si l'utilisateur a demandé moins d'animations dans son système,
     base.css ramène la durée à presque zéro. */

const revealTargets = document.querySelectorAll(
  ".section-header, .project, .promo__head, .benefit, .about__text, .trait, " +
  ".skill-group, .ai-note, .process__step, .timeline__item, .contact__panel"
);

if ("IntersectionObserver" in window) {
  document.documentElement.classList.add("has-reveal");

  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add("is-visible");
        obs.unobserve(el); // une seule fois

        // Une fois l'apparition terminée, on retire les classes :
        // le bloc retrouve ses propres effets (survol des cartes, etc.)
        const delay = parseInt(el.style.getPropertyValue("--reveal-delay")) || 0;
        setTimeout(() => el.classList.remove("reveal", "is-visible"), 700 + delay);
      });
    },
    { rootMargin: "0px 0px -8% 0px" }
  );

  revealTargets.forEach((el) => {
    // Petit décalage entre voisins (cartes d'une même grille) : 0, 80, 160 ms…
    const index = Array.from(el.parentElement.children).indexOf(el);
    el.style.setProperty("--reveal-delay", `${Math.min(index, 4) * 80}ms`);
    el.classList.add("reveal");
    revealObserver.observe(el);
  });
}
