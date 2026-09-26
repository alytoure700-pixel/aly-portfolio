/* =========================================================
   RENDER.JS — affiche les données de data.js dans la page
   Chaque fonction s'occupe d'une partie du site.
   Tu n'as normalement pas besoin de modifier ce fichier :
   modifie plutôt data.js.
   ========================================================= */


/* ---------- Outils ---------- */

// Protège le texte avant de l'insérer dans du HTML :
// un "<" dans une description ne doit jamais être lu comme une balise.
function escapeHTML(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Extrait le nom de domaine d'une URL, pour le visuel provisoire
// ex : "https://cheikh-telecom.vercel.app" → "cheikh-telecom.vercel.app"
function domainOf(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return "";
  }
}

// Icône "flèche sortante" pour les liens externes
const ICON_EXTERNAL = `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 3h7v7M13 3 4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

// Lien externe : s'ouvre dans un nouvel onglet, annoncé aux lecteurs d'écran
function externalLink(url, label, style) {
  return `
    <a class="btn ${style}" href="${escapeHTML(url)}" target="_blank" rel="noopener">
      ${escapeHTML(label)} ${ICON_EXTERNAL}
      <span class="visually-hidden">(nouvel onglet)</span>
    </a>`;
}


/* ---------- Hero : statut + bouton CV ---------- */

function renderHero(profile) {
  // Statut ("Ouvert aux stages…") : affiché seulement si visible: true
  const status = document.querySelector("[data-status]");
  if (status && profile.status.visible && profile.status.text) {
    status.querySelector("[data-status-text]").textContent = profile.status.text;
    status.hidden = false;
  }

  // Bouton CV : affiché seulement si un chemin de fichier est renseigné
  const cv = document.querySelector("[data-cv]");
  if (cv && profile.cv) {
    cv.href = profile.cv;
    cv.hidden = false;
  }
}


/* ---------- Projets ---------- */

// Le visuel en haut de la fiche : la capture d'écran si elle existe,
// sinon un cadre de navigateur provisoire avec l'adresse du site.
function projectVisual(project) {
  if (project.image) {
    return `
      <img src="${escapeHTML(project.image)}"
           alt="Capture d'écran de ${escapeHTML(project.name)}"
           width="1200" height="750" loading="lazy" decoding="async">`;
  }

  const domain = domainOf(project.demo) || "bientôt en ligne";
  return `
    <div class="browser" aria-hidden="true">
      <div class="browser__bar">
        <span></span><span></span><span></span>
        <p class="browser__url">${escapeHTML(domain)}</p>
      </div>
      <div class="browser__body">
        <p class="browser__name">${escapeHTML(project.name)}</p>
        <p class="browser__type">${escapeHTML(project.type)}</p>
      </div>
    </div>`;
}

// Une fiche projet complète.
// Chaque bloc optionnel (résultat, appris, liens…) n'apparaît
// que si la donnée existe dans data.js.
function projectCard(project, index) {
  const isFeatured = index === 0;
  const number = String(index + 1).padStart(2, "0");

  const features = project.features.length
    ? `<ul class="project__features">
         ${project.features.map((f) => `<li>${escapeHTML(f)}</li>`).join("")}
       </ul>`
    : "";

  const result = project.result
    ? `<div class="project__block"><dt>Résultat</dt><dd>${escapeHTML(project.result)}</dd></div>`
    : "";

  const learned = project.learned
    ? `<div class="project__block"><dt>Ce que j'ai appris</dt><dd>${escapeHTML(project.learned)}</dd></div>`
    : "";

  const demoNote = project.demoNote
    ? `<p class="project__note">${escapeHTML(project.demoNote)}</p>`
    : "";

  // Boutons : on ne crée que ceux dont le lien existe
  const links = [];
  if (project.demo) {
    const label = project.demoNote ? "Essayer la démo" : "Voir le projet";
    links.push(externalLink(project.demo, label, "btn--primary"));
  }
  if (project.shop) links.push(externalLink(project.shop, "Voir la boutique publique", "btn--secondary"));
  if (project.github) links.push(externalLink(project.github, "Code sur GitHub", "btn--secondary"));

  const actions = links.length
    ? `<div class="project__actions">${links.join("")}</div>`
    : `<p class="project__soon">Lien public bientôt disponible.</p>`;

  return `
    <article class="project ${isFeatured ? "project--featured" : ""}">
      <div class="project__visual">${projectVisual(project)}</div>

      <div class="project__content">
        <p class="project__meta"><span>${number}</span> — ${escapeHTML(project.type)}</p>
        <h3 class="project__name">${escapeHTML(project.name)}</h3>

        <dl class="project__story">
          <div class="project__block"><dt>Problème</dt><dd>${escapeHTML(project.problem)}</dd></div>
          <div class="project__block"><dt>Solution</dt><dd>${escapeHTML(project.solution)}</dd></div>
          ${result}
          ${learned}
        </dl>

        ${features}

        <ul class="project__tech" aria-label="Technologies utilisées">
          ${project.tech.map((t) => `<li class="tag">${escapeHTML(t)}</li>`).join("")}
        </ul>

        ${demoNote}
        ${actions}
      </div>
    </article>`;
}

function renderProjects(projects) {
  const container = document.querySelector("[data-projects]");
  if (!container) return;
  container.innerHTML = projects.map(projectCard).join("");
}


/* ---------- Compétences ---------- */

// Une carte par groupe (Front-End, Back-end…).
// Les tags "learning" ont un style différent (bordure en pointillés).
function skillGroup(group) {
  const regular = group.regular.map((s) => `<li class="skill-tag">${escapeHTML(s)}</li>`);
  const learning = group.learning.map(
    (s) => `<li class="skill-tag skill-tag--learning">${escapeHTML(s)}</li>`
  );

  return `
    <article class="skill-group">
      <h3 class="skill-group__title">${escapeHTML(group.title)}</h3>
      <p class="skill-group__text">${escapeHTML(group.description)}</p>
      <ul class="skill-group__tags">${[...regular, ...learning].join("")}</ul>
    </article>`;
}

function renderSkills(skills, aiText) {
  const container = document.querySelector("[data-skills]");
  if (container) container.innerHTML = skills.map(skillGroup).join("");

  const ai = document.querySelector("[data-ai-text]");
  if (ai) ai.textContent = aiText; // textContent : pas besoin d'échapper
}


/* ---------- Lancement ---------- */

renderHero(SITE.profile);
renderProjects(SITE.projects);
renderSkills(SITE.skills, SITE.aiText);
