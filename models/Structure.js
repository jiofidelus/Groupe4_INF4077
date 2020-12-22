/** @format */

module.exports = (sequelize, Sequelize) => {
  const Structure = sequelize.define('structure', {
    idStructure: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    designationAdministrative: {
      type: Sequelize.STRING,
      unique: true,
    },
    telephoneSecretariat: Sequelize.STRING,
    addresse: Sequelize.STRING,
  });
  return Structure;
};
