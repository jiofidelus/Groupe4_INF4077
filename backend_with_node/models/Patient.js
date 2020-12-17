/** @format */

module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('patient', {
    idPatient: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    names: DataTypes.STRING,
    surnames: DataTypes.STRING,
    sexe: DataTypes.STRING(1),
    picture: {
      type: DataTypes.STRING,
    },
    patientIdArchive: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      unique: true,
    },
    phones: DataTypes.STRING,
    poids: DataTypes.INTEGER,
    admissionDate: DataTypes.DATE,
    location: DataTypes.JSON,
  });

  return Patient;
};
