export const fieldsUtilisateur = [
  {
    key: "Numero",
    label: "N°",
    _style: { width: "1%" },
    filter: false,
  },
  "photo",
  "noms",
  "prenoms",
  "email",
  "groupe",
  {
    key: "actions",
    label: "Actions",
    _style: { width: "20%" },
    sorter: false,
    filter: false,
  },
];

export const fieldCas = [
  {
    key: "Numero",
    label: "N°",
    _style: { width: "1%" },
    filter: false,
  },
  "photo",
  {
    key: "names",
    label: "noms",
  },
  {
    key: "surnames",
    label: "prenoms",
  },
  {
    key: "old",
    label: "age",
  },
  {
    key: "phones",
    label: "prenoms",
  },
  "ville",
  "status",
  {
    key: "actions",
    label: "Actions",
    _style: { width: "20%" },
    sorter: false,
    filter: false,
  },
];

export const fieldSuivie = [
  {
    key: "Numero",
    label: "N°",
    _style: { width: "1%" },
    filter: false,
  },
  {
    key: "date",
    label: "Date et Heure",
  },

  {
    key: "Description",
    label: "description",
    _style: { width: "25%" },
  },
  {
    key: "dehydrationLevel",
    label: "deshydratation",
    _style: { width: "15%" },
  },
  {
    key: "selleLevel",
    label: "Niveau de selles",
    _style: { width: "15%" },
  },
  {
    key: "vomitingLevel",
    label: "Niveau de vomissements",
    _style: { width: "15%" },
  },
  {
    key: "diahreeLevel",
    label: "Niveau de diarhree",
    _style: { width: "15%" },
  },
];

export const getBadge = (position) => {
  switch (position) {
    case 1:
      return "warning";
    case 2:
      return "danger";
    case 3:
      return "success";
    default:
      return "primary";
  }
};
