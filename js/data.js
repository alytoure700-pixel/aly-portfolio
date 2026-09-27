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
    cv: "assets/cv/CV-Aly-Toure.pdf",
  },

  /* ---------- Liens de contact ---------- */
  contact: {
    email: "alytoure700@gmail.com",                 // ex : "aly@exemple.com"
    whatsapp: "221783873491",           // numéro international sans + ni espaces, ex : "221771234567"
    linkedin: "https://www.linkedin.com/in/aly-tour%C3%A9-a20b0b43a/",           // URL complète du profil
    github: "https://github.com/alytoure700-pixel",               // URL complète du profil
  },

  /* ---------- Offre SAMA-COMMERCE (section "Pour les commerçants") ----------
     Message pré-rempli quand un commerçant clique sur
     "Je veux l'utiliser pour ma boutique" (ouvre WhatsApp). */
  samaWhatsappMessage:
    "Bonjour Aly, je suis commerçant et je suis intéressé par SAMA-COMMERCE pour ma boutique.",

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
      image: "assets/images/projects/sama-commerce-produits.webp",
      image2: "assets/images/projects/sama-commerce.webp", // 2ᵉ capture (optionnelle), affichée devant la 1ʳᵉ
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
      image: "assets/images/projects/cheikh-telecom.webp",
      demo: "https://cheikh-telecom.vercel.app",
      demoNote: "",
      shop: "",
      github: "",
    },
    {
      name: "SALOUM-SEN BOUTIQUE",
      type: "Boutique en ligne · Mission freelance",
      problem:
        "Une boutique d'électroménager de Ziguinchor voulait présenter ses produits en ligne et recevoir des commandes sans que ses clients aient à se déplacer.",
      solution:
        "Un site e-commerce mobile avec un catalogue par catégories, un panier et une commande finalisée sur WhatsApp, pensé pour la livraison locale.",
      features: [
        "Catalogue en 9 catégories (froid, cuisson, lavage, climatisation…)",
        "Panier et commande via WhatsApp",
        "Paiement à la livraison ou par mobile money",
        "Pensé d'abord pour le téléphone",
      ],
      tech: ["HTML", "CSS", "JavaScript", "Firestore", "Firebase Auth", "Vercel", "PWA"],
      result: "",
      learned: "",
      image: "assets/images/projects/saloum-sen.webp",
      demo: "https://codecuriosity0-bit.github.io/Saloum-Sen-Boutique/",
      demoNote: "",
      shop: "",
      github: "",
    },
    {
      name: "ABG — ALKABIR BUSINESS GENERAL",
      type: "Sites de marques · Projet client",
      problem:
        "Une entreprise de Touba vendait son miel et son café par WhatsApp et le bouche-à-oreille, sans vitrine en ligne pour présenter ses marques.",
      solution:
        "Un site pour la maison mère et un site par marque (Alkabir Honey, Alkabir Coffee), avec un espace d'administration pour modifier les gammes et les prix sans toucher au code.",
      features: [
        "Site de la maison mère et deux sites de marque",
        "Espace d'administration sécurisé pour les gammes et les prix",
        "Thème clair / sombre avec logo adapté",
        "Installable sur mobile (PWA)",
      ],
      tech: ["HTML", "CSS", "JavaScript", "Firestore", "Firebase Auth", "PWA"],
      result: "",
      learned: "",
      image: "assets/images/projects/abg.webp",
      demo: "https://codecuriosity0-bit.github.io/Alkabir-Busness-G-n-rale/",
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
     Du plus récent au plus ancien.
     "type" s'affiche en petite étiquette : Formation, Développement web, Projets… */
  timeline: [
    {
      date: "Aujourd'hui",
      type: "Objectif",
      title: "Vers l'ingénierie logicielle et l'IA",
      text: "Je consolide mes bases (TypeScript, architecture, sécurité des données) et je commence à explorer l'intelligence artificielle.",
    },
    {
      date: "Août 2026",
      type: "Freelance",
      title: "Développeur web — Boutique Saloum Sen",
      text: "Première mission freelance à Ziguinchor : analyse des besoins, rédaction des spécifications, développement et tests du site de la boutique.",
    },
    {
      date: "2026",
      type: "Projets",
      title: "Des applications pour de vrais utilisateurs",
      text: "SAMA-COMMERCE, une application de gestion pour commerçants, Cheikh Telecom, le catalogue d'une boutique de Ziguinchor, et les sites de marques d'ABG à Touba.",
    },
    {
      date: "2024",
      type: "Développement web",
      title: "Apprentissage en autodidacte",
      text: "HTML, CSS et JavaScript, puis Git et GitHub, Firebase et les PWA, en construisant des projets plutôt qu'en suivant uniquement des cours.",
    },
    {
      date: "Oct. 2024",
      type: "Formation",
      title: "Licence Mathématiques – Physique – Informatique",
      text: "Université Cheikh Anta Diop de Dakar, Faculté des Sciences et Techniques. Actuellement en 2ᵉ année. Membre du club TDSI (Transmission de Données et Sécurité de l'Information).",
    },
  ],
};
