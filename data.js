// ===== FHIR Académie — Catalogue des modules =====
const COURSES = [
  {
    id: "fhir-101",
    title: "Introduction à FHIR",
    level: "Débutant",
    icon: "🩺",
    duration: "3h",
    lessons: 12,
    price: 0,
    oldPrice: null,
    free: true,
    tags: ["Fondamentaux", "Débutant"],
    short: "Comprendre ce qu'est FHIR, pourquoi il existe, et comment il structure les données de santé.",
    description: "Ce module d'introduction pose les bases : historique de l'interopérabilité en santé, philosophie de FHIR, notion de ressource, et panorama des cas d'usage réels en France et à l'international. Aucun prérequis technique.",
    curriculum: [
      { section: "Module 1 — Comprendre FHIR", lessons: [
        { name: "Pourquoi l'interopérabilité en santé est un défi", free: true, duration: "8 min" },
        { name: "Qu'est-ce que FHIR ? Origines et philosophie", free: true, duration: "12 min" },
        { name: "FHIR vs HL7 v2 vs CDA", free: true, duration: "10 min" },
      ]},
      { section: "Module 2 — Les ressources FHIR", lessons: [
        { name: "La notion de ressource (Resource)", free: false, duration: "14 min" },
        { name: "Anatomie d'une ressource Patient", free: false, duration: "16 min" },
        { name: "Quiz : les fondamentaux", free: false, duration: "5 min" },
      ]},
      { section: "Module 3 — Panorama des cas d'usage", lessons: [
        { name: "FHIR dans le Dossier Médical Partagé", free: false, duration: "11 min" },
        { name: "FHIR et l'interopérabilité européenne", free: false, duration: "9 min" },
      ]},
    ]
  },
  {
    id: "fhir-resources",
    title: "Les ressources cliniques FHIR",
    level: "Débutant",
    icon: "📋",
    duration: "5h30",
    lessons: 18,
    price: 79,
    oldPrice: 99,
    tags: ["Ressources", "Clinique"],
    short: "Patient, Observation, Encounter, Condition, MedicationRequest… maîtrisez les ressources essentielles.",
    description: "Un tour complet des ressources cliniques les plus utilisées dans les projets FHIR réels : structure, champs obligatoires, terminologies associées (LOINC, SNOMED CT, CIM-10) et bonnes pratiques de modélisation.",
    curriculum: [
      { section: "Module 1 — Patient & Practitioner", lessons: [
        { name: "La ressource Patient en détail", free: true, duration: "15 min" },
        { name: "Practitioner, PractitionerRole, Organization", free: false, duration: "13 min" },
      ]},
      { section: "Module 2 — Observation & Condition", lessons: [
        { name: "Modéliser un résultat de laboratoire", free: false, duration: "18 min" },
        { name: "Observation et les terminologies LOINC", free: false, duration: "16 min" },
        { name: "Condition et diagnostics (CIM-10)", free: false, duration: "14 min" },
      ]},
      { section: "Module 3 — Encounter & Medication", lessons: [
        { name: "Modéliser un séjour hospitalier (Encounter)", free: false, duration: "17 min" },
        { name: "MedicationRequest et MedicationStatement", free: false, duration: "15 min" },
        { name: "Exercice pratique : dossier patient complet", free: false, duration: "25 min" },
      ]},
    ]
  },
  {
    id: "fhir-api-rest",
    title: "API REST FHIR : de la théorie à la pratique",
    level: "Intermédiaire",
    icon: "🔌",
    duration: "7h",
    lessons: 22,
    price: 129,
    oldPrice: null,
    tags: ["API", "REST", "Technique"],
    short: "Interroger, créer et mettre à jour des ressources via l'API REST FHIR. Avec exercices sur serveur bac à sable.",
    description: "Passez à la pratique : opérations CRUD, recherche (_include, _revinclude, chaînage), pagination, opérations spéciales ($everything, $validate), et gestion des erreurs. Tous les exercices se font sur un serveur FHIR public de test.",
    curriculum: [
      { section: "Module 1 — Les bases du REST FHIR", lessons: [
        { name: "Structure d'une requête FHIR", free: true, duration: "12 min" },
        { name: "GET, POST, PUT, DELETE sur les ressources", free: false, duration: "18 min" },
      ]},
      { section: "Module 2 — Recherche avancée", lessons: [
        { name: "Paramètres de recherche et chaînage", free: false, duration: "20 min" },
        { name: "_include, _revinclude et performances", free: false, duration: "16 min" },
        { name: "Pagination des Bundles", free: false, duration: "10 min" },
      ]},
      { section: "Module 3 — Opérations avancées", lessons: [
        { name: "Les opérations spéciales ($validate, $everything)", free: false, duration: "19 min" },
        { name: "Transactions et Bundles", free: false, duration: "17 min" },
        { name: "Projet fil rouge : construire un client FHIR", free: false, duration: "40 min" },
      ]},
    ]
  },
  {
    id: "fhir-securite",
    title: "Sécurité, consentement et SMART on FHIR",
    level: "Intermédiaire",
    icon: "🔐",
    duration: "4h30",
    lessons: 15,
    price: 99,
    oldPrice: null,
    tags: ["Sécurité", "SMART on FHIR"],
    short: "Authentification OAuth2, SMART on FHIR, gestion du consentement patient et audit.",
    description: "Un module dédié aux enjeux de sécurité : autorisation OAuth2/OpenID Connect, le framework SMART on FHIR pour les apps cliniques, la ressource Consent, et les bonnes pratiques d'audit et de traçabilité.",
    curriculum: [
      { section: "Module 1 — Authentification & autorisation", lessons: [
        { name: "OAuth2 et OpenID Connect appliqués à la santé", free: true, duration: "16 min" },
        { name: "Introduction à SMART on FHIR", free: false, duration: "18 min" },
      ]},
      { section: "Module 2 — Consentement patient", lessons: [
        { name: "La ressource Consent en pratique", free: false, duration: "14 min" },
        { name: "Modéliser des scénarios de consentement complexes", free: false, duration: "16 min" },
      ]},
      { section: "Module 3 — Audit et conformité", lessons: [
        { name: "AuditEvent et traçabilité", free: false, duration: "12 min" },
        { name: "Conformité RGPD et hébergement de données de santé", free: false, duration: "15 min" },
      ]},
    ]
  },
  {
    id: "fhir-implementation",
    title: "Implémenter un serveur FHIR de A à Z",
    level: "Avancé",
    icon: "🏗️",
    duration: "9h",
    lessons: 26,
    price: 179,
    oldPrice: 219,
    tags: ["Architecture", "Serveur", "Avancé"],
    short: "Choisir, déployer et configurer un serveur FHIR en environnement de production.",
    description: "Pour les architectes et développeurs qui doivent déployer FHIR en production : comparatif des serveurs open-source, stratégies de profils (StructureDefinition), validation, versionning et migration de données existantes vers FHIR.",
    curriculum: [
      { section: "Module 1 — Choisir son serveur FHIR", lessons: [
        { name: "Panorama des serveurs FHIR open-source", free: true, duration: "14 min" },
        { name: "Critères de choix pour la production", free: false, duration: "16 min" },
      ]},
      { section: "Module 2 — Profils et validation", lessons: [
        { name: "StructureDefinition et profils FHIR français", free: false, duration: "22 min" },
        { name: "Valider des ressources avec un profil", free: false, duration: "18 min" },
      ]},
      { section: "Module 3 — Mise en production", lessons: [
        { name: "Migrer des données legacy vers FHIR", free: false, duration: "24 min" },
        { name: "Monitoring, versionning et haute disponibilité", free: false, duration: "20 min" },
        { name: "Étude de cas : déploiement hospitalier", free: false, duration: "35 min" },
      ]},
    ]
  },
  {
    id: "fhir-interop-france",
    title: "FHIR et l'interopérabilité en santé en France",
    level: "Intermédiaire",
    icon: "🇫🇷",
    duration: "3h",
    lessons: 10,
    price: 69,
    oldPrice: null,
    tags: ["France", "Réglementation"],
    short: "Cadre d'interopérabilité de l'ANS, Mon Espace Santé, DMP, et les spécificités françaises de FHIR.",
    description: "Le module indispensable pour travailler avec les systèmes de santé français : cadre d'interopérabilité publié par l'ANS, volets FHIR français, intégration avec Mon Espace Santé, et enjeux réglementaires spécifiques.",
    curriculum: [
      { section: "Module 1 — Le cadre français", lessons: [
        { name: "Le rôle de l'ANS dans l'interopérabilité", free: true, duration: "13 min" },
        { name: "Les volets FHIR du cadre d'interopérabilité", free: false, duration: "17 min" },
      ]},
      { section: "Module 2 — Mon Espace Santé & DMP", lessons: [
        { name: "Architecture de Mon Espace Santé", free: false, duration: "15 min" },
        { name: "Intégrer un service avec le DMP", free: false, duration: "19 min" },
      ]},
    ]
  },
];

function formatPrice(p){
  return p === 0 ? "Gratuit" : p.toFixed(0) + " €";
}
