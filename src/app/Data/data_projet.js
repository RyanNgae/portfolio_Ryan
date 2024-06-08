export default function data_projet() {
  var projet_1 = {
    titre: "Modélisation de la base de données d'une garderie",
    illustration: "garderie.jpg",
    description:
      "Mise en place du système d'informations d'une chèche à l'aide du SGBD MySQL. Dans ce projet j'ai mis en place une base de données permettant de gérer l'activité complète d'une garderie : gestion des enfants, des parents, régimes alimentaires, planning, salles, etc...",
  };

  var projet_2 = {
    titre: "Modélisation de l'entrepot de données d'un service d'appel",
    illustration: "centreappel.jpg",
    description:
      "Mise en place de l'entrepot de données d'un centre appel. MySQL Workbench m'a permis de modéliser l'entrepot de données (tables, dimensions et table de faits) et Talend m'a permis d'extraire les données, de les transformer puis de les charger dans l'entrepôt. La modélisation a donc permis de remonter le nombre d'appel traités, le nombre de téléconseillers impliqués lors de ces appels et d'analyser ses métriques sous différents axes : client, centre d'appel, commercial, temps, etc...",
  };

  var projets = [projet_1, projet_2];

  return projets;
}
