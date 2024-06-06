export default function data_projet() {
  var projet_1 = {
    titre: "Modélisation de la BD d'une garderie",
    illustration: "garderie.jpg",
    description:
      "Mise en place du système d'informations d'une chèche à l'aide du SGBD MySQL. Dans ce projet j'ai mis en place une base de données permettant de gérer l'activité complète d'une garderie : gestion des enfants, des parents, régimes alimentaires, planning, salles, etc...",
  };

  var projet_2 = {
    titre: "Modélisation de l'entrepot de données d'un service d'appel",
    illustration: "centreappel.jpg",
    description:
      "Mise en place de l'entrepot de données d'un centre appel, permettant de remonter le nombre d'appel traités afin de les classifier sous différentes axes d'analyse.",
  };

  var projets = [projet_1, projet_2];

  return projets;
}
