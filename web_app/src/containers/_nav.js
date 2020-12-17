export default [
  {
    _tag: "CSidebarNavItem",
    name: "Tableau de Bord",
    to: "/acceuil",
    fontIcon: "fas fa-home",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Carte"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Consulter la carte",
    to: "/cartes",
    fontIcon: "fas fa-map-marker",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Patients"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Enregister un cas",
    to: "/nouveau",
    fontIcon: "fas fa-user-injured",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Statistques"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Consulter les statisques",
    to: "/statistiques",
    fontIcon: "fas fa-chart-bar",
  },
  ,
];
