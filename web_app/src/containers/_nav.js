export default [
  {
    _tag: "CSidebarNavItem",
    name: "Tableau de Bord",
    to: "/acceuil",
    icon: "cil-speedometer",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Carte"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Consulter la carte",
    to: "/cartes",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Patients"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Enregister un cas",
    to: "/nouveau",
    icon: "cil-speedometer",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Statistques"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Consulter les statisques",
    to: "/statistiques",
    icon: "cil-speedometer",
  },
  ,
];
