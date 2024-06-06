export default function data_comp() {
  var comp_BA_1 = {
    titre: "Innovation",
    color: "bg-upjv-2",
    competences: [
      "Envisage des solutions créatives pour élaborer de nouveaux concepts.",
      "Fait preuve d'un mode de pensée ouvert et innovant",
      "Sais tirer parti des avancées technologiques pour répondre aux besoins de l'entreprise",
    ],
  };

  var comp_BA_2 = {
    titre: "Science des données et analyse",
    color: "bg-upjv-2",
    competences: [
      "Identifie, extrait et intègre les données",
      "Conçoit et réalise des outils d'analyse des données",
      "Vérifie la véracité des données",
      "Visualise les résultats de l'analyse des données",
    ],
  };

  var comp_BA_3 = {
    titre: "Gestion de l'information et de la connaissance",
    color: "bg-upjv-2",
    competences: [
      "Identifie les informations et les connaissances clés",
      "Intègre et synthétise les informations",
      "Créé une structure d'information pour permettre l'exploitation et le partage des informations",
    ],
  };

  var comp_BA_4 = {
    titre: "Gestion de la relation client",
    color: "bg-upjv-2",
    competences: [
      "Met en place de bonnes relations au travail",
      "Entretien une communication régulière avec les collègues, clients, partenaires et fournisseurs.",
      "Garantit que les besoins, les préoccupations et les réclamations des différentes parties prenantes sont bien compris et traités.",
    ],
  };

  var comp_AMOA_1 = {
    titre: "Tests",
    color: "bg-slate-400",
    competences: [
      "Organise des campagnes d'essais",
      "Consigne et communique les résultats des tests",
      "Garantit la conformité des développements aux spécifications fonctionnelles",
    ],
  };

  var competences = [
    {
      poste: "Business Analyst BI",
      color: "bg-upjv-2",
      comp: [comp_BA_1, comp_BA_2, comp_BA_3, comp_BA_4],
    },
    {
      poste: "AMOA",
      color: "bg-slate-400",
      comp: [comp_AMOA_1],
    },
  ];
  return competences;
}
