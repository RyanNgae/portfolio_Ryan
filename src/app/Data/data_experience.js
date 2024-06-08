export default function data_exp() {
  var exp_1 = {
    poste: "BUSINESS ANALYST BI",
    entreprise: "AEW EUROPE",
    logo: "logoAEW.png",
    lieu: "Paris, France",
    description: "Mise en place d’une culture Self-BI",
    detail:
      "Mise en place de solutions de jeux de données et rapports au service du métier pour les rendre autonomes sur le Reporting.",
    missions: [
      "Recueil du besoin auprès des métiers.",
      "Etude des solutions techniques (SSRS/Cubes tabulaires).",
      "Accompagnement du métier sur les technologies.",
      "Référent fonctionnel auprès de la MOE sur les chantiers de développement.",
    ],
    competences: [
      "Innovation",
      "Science des données et analyse",
      "Gestion de la relation client",
    ],
    debut: "Septembre 2023",
    fin: "Actuellement",
    isExperience: true,
  };

  var exp_2 = {
    poste: "BUSINESS ANALYST BI",
    entreprise: "AEW EUROPE",
    logo: "logoAEW.png",
    lieu: "Paris, France",
    description: "Migration MyReport vers Power BI",
    detail:
      "Factorisation et développement des rapports MyReport sur Power BI.",
    missions: [
      "Etude des rapports existants pour factorisation.",
      "Développement de Dashboard Power BI (Storytelling).",
      "Mise en place de KPI avec DAX.",
      "Accompagnement du métier sur Power BI.",
      "Cadrage et étude des nouveaux besoins.",
      "Reporting AD-HOC.",
    ],
    competences: [
      "Gestion de l'information et de la connaissance",
      "Gestion de la relation client",
    ],
    debut: "Septembre 2023",
    fin: "Actuellement",
    isExperience: true,
  };

  var exp_3 = {
    poste: "AMOA",
    entreprise: "AEW EUROPE",
    logo: "logoAEW.png",
    lieu: "Paris, France",
    description: "Pilotage montée de version de l'extranet",
    detail:
      "Montée de version de l'extranet client afin de remonter les informations dans l'outil de back-office.",
    missions: [
      "Mise en place d'un cahier de recettes.",
      "Suivi des développements de la MOE.",
      "Test des features développées.",
      "Rédaction de comptes rendu;",
      "Echange avec l'éditeur de l'outil de back-office.",
    ],
    competences: [
      "Test",
      "Gestion des projets et du portefeuille projets",
      "Gestion de la relation client",
    ],
    debut: "Septembre 2022",
    fin: "Septembre 2023",
    isExperience: true,
  };

  var exp_4 = {
    poste: "AMOA",
    entreprise: "AEW EUROPE",
    logo: "logoAEW.png",
    lieu: "Paris, France",
    description: "Support Unicia (outil back-office gestion de SCPI)",
    detail: "Support de niveau 1 aux utilisateur en interne.",
    missions: [
      "Prise en charge de l'incident sur l'outil de ticketting (Service Snow).",
      "Echange avec l'utilisateur victime de l'incident pour identification/correction.",
      "Remontée de l'incident à l'éditeur si dysfonctionnement de l’application.",
      "Suivi du SLA (Service Level Agreetment).",
    ],
    competences: ["Gestion de la relation client", "Test"],
    debut: "Septembre 2022",
    fin: "Septembre 2024",
    isExperience: true,
  };

  var experiences = [exp_1, exp_2, exp_3, exp_4];

  return experiences;
}
