/* =========================================================
   DATA.JS — TOUTES TES INFORMATIONS MODIFIABLES SONT ICI
   ---------------------------------------------------------
   Tu n'as pas besoin de toucher au HTML pour :
   - changer tes liens de contact
   - activer / désactiver ton statut de disponibilité
   - ajouter, modifier ou retirer un projet
   - mettre à jour tes compétences et ton parcours

   Règles :
   - Garde les guillemets "..." autour du texte.
   - Laisse une chaîne vide "" si une info n'existe pas encore :
     le bouton ou la ligne correspondante sera masqué automatiquement.
   - Les valeurs en MAJUSCULES (TON_EMAIL, etc.) sont à remplacer.
   ========================================================= */

const SITE = {

  /* ---------- Profil ---------- */
  profile: {
    name: "Aly Touré",
    role: "Développeur Web Junior",
    tagline:
      "Je conçois des applications web utiles pour de vrais utilisateurs, et je construis pas à pas mon parcours vers l'ingénierie logicielle et l'IA.",

    // Statut affiché dans le Hero. Mets visible: false pour le masquer.
    status: {
      visible: true,
      text: "Ouvert aux stages et missions freelance",
    },

    // Chemin vers ton CV en PDF (ex : "assets/cv/CV-Aly-Toure.pdf").
    // Laisse "" tant que tu n'as pas de CV : le bouton sera masqué.
    cv: "",
  },

  /* ---------- Liens de contact ---------- */
  contact: {
    email: "TON_EMAIL",                 // ex : "aly@exemple.com"
    whatsapp: "TON_WHATSAPP",           // numéro international sans + ni espaces, ex : "221771234567"
    linkedin: "TON_LINKEDIN",           // URL complète du profil
    github: "TON_GITHUB",               // URL complète du profil
  },

  /* ---------- Projets ----------
     Le premier projet de la liste est mis en avant (grand format).
     Pour ajouter un projet : copie un bloc { ... } entier, colle-le
     et modifie son contenu. */
  projects: [
    {
      name: "SAMA-COMMERCE",
      type: "Application de gestion commerciale",
      problem:
        "Beaucoup de petits commerçants gèrent produits, ventes, clients et dettes sur papier, sans visibilité sur leur bénéfice réel.",
      solution:
        "Une application installable sur téléphone qui centralise produits, stock, ventes, clients, facturation et statistiques.",
      features: [
        "Produits par catégories, vente en gros et au détail",
        "Stock avec alertes de rupture",
        "Suivi des clients et des paiements",
        "Factures générées en PDF",
        "Statistiques et graphiques : chiffre d'affaires, bénéfice, meilleures ventes",
      ],
      tech: ["HTML", "CSS", "JavaScript", "Vite", "Firestore", "Firebase Auth", "Firebase Hosting", "Chart.js", "jsPDF", "PWA"],
      result: "",   // Fait réel uniquement. Laisse "" si rien de mesurable pour l'instant.
      learned: "",  // Une phrase : ce que ce projet t'a appris.
      image: "",    // ex : "assets/images/projects/sama-commerce.webp"
      demo: "https://sama-commerce-236ea.web.app/?demo=1", // ?demo=1 = connexion automatique au compte démo
      demoNote: "Connexion automatique à un compte de démonstration (lecture seule).",
      shop: "https://sama-commerce-236ea.web.app/boutique.html?id=2l3zwOBMSBPOJ4gmWDWuLqzuKWm2", // boutique publique du compte démo
      github: "",   // dépôt privé : le bouton GitHub reste masqué
    },
    {
      name: "CHEIKH TELECOM",
      type: "Catalogue en ligne pour un commerce réel",
      problem:
        "Une boutique de téléphones et d'accessoires à Ziguinchor dont les clients demandaient les prix un par un, par téléphone ou WhatsApp.",
      solution:
        "Un catalogue mobile par catégories, avec un bouton qui ouvre WhatsApp sur un message pré-rempli et un espace sécurisé pour gérer les produits.",
      features: [
        "Catalogue par catégories",
        "Commande et négociation via WhatsApp",
        "Espace de gestion protégé par authentification",
        "Installable sur mobile (PWA)",
      ],
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firestore", "Firebase Auth", "Vercel", "PWA"],
      result: "",
      learned: "",
      image: "",
      demo: "https://cheikh-telecom.vercel.app",
      demoNote: "",
      shop: "",
      github: "",
    },
    {
      name: "SALOUM-SEN BOUTIQUE",
      type: "Site e-commerce / catalogue",
      problem: "[À compléter : quel besoin ce projet devait-il résoudre ?]",
      solution:
        "Une boutique en ligne consultable sur mobile, avec commande via WhatsApp et un espace sécurisé pour gérer le catalogue.",
      features: [],
      tech: ["HTML", "CSS", "JavaScript", "Firestore", "Firebase Auth", "Vercel", "PWA"],
      result: "",
      learned: "",
      image: "",
      demo: "",
      demoNote: "",
      shop: "",
      github: "",
    },
  ],

  /* ---------- Compétences ----------
     "regular"  : ce que tu utilises régulièrement
     "learning" : utilisé sur un projet réel, en cours d'approfondissement */
  skills: [
    {
      title: "Front-End",
      description: "Interfaces claires, rapides et utilisables sur téléphone.",
      regular: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Manipulation du DOM"],
      learning: ["TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Back-end & données",
      description: "Authentification, base de données et sécurité des accès.",
      regular: ["Firebase Authentication", "Firestore", "Règles de sécurité Firestore", "Firebase Hosting"],
      learning: [],
    },
    {
      title: "Outils & mise en ligne",
      description: "Versionner, construire et déployer des applications réelles.",
      regular: ["Git", "GitHub", "GitHub CLI", "VS Code", "Vercel", "PWA"],
      learning: ["Vite", "npm / Node.js (outillage)", "Chart.js", "jsPDF"],
    },
  ],

  /* ---------- IA & productivité ----------
     Texte affiché dans le bloc "IA" de la section Compétences. */
  aiText:
    "J'utilise des assistants IA pour explorer des pistes, relire mon code et apprendre plus vite. Je lis, comprends et teste chaque ligne que j'intègre : l'IA accélère mon travail, elle ne le remplace pas.",

  /* ---------- Parcours ----------
     Du plus récent au plus ancien. */
  timeline: [
    {
      date: "Aujourd'hui",
      title: "Vers l'ingénierie logicielle",
      text: "Consolidation des bases (TypeScript, architecture, bonnes pratiques) et premiers pas vers l'intelligence artificielle.",
    },
    {
      date: "[ANNÉE]",
      title: "Projets pour de vrais utilisateurs",
      text: "Conception et mise en ligne d'applications utilisées par des commerçants : SAMA-COMMERCE, Cheikh Telecom, Saloum-Sen Boutique.",
    },
    {
      date: "2024",
      title: "Apprentissage du développement web",
      text: "HTML, CSS et JavaScript en autodidacte, puis Git/GitHub, Firebase et les PWA.",
    },
    {
      date: "Depuis 2024",
      title: "Licence Mathématiques – Physique – Informatique",
      text: "Université Cheikh Anta Diop de Dakar — actuellement en 2ᵉ année.",
    },
    {
      date: "2024",
      title: "Baccalauréat",
      text: "Obtention du baccalauréat, puis entrée à l'université.",
    },
  ],
};
