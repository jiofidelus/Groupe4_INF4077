/** @format */

module.exports = (sequelize, Sequelize) => {
  const Suivie = sequelize.define('suivie', {
    idSuivie: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: Sequelize.DATE,
    dehydrationLevel: Sequelize.INTEGER,
    selleLevel: Sequelize.INTEGER,
    dehydrationLevel: Sequelize.INTEGER,
    vomitingLevel: Sequelize.INTEGER,
    diahreeLevel: Sequelize.INTEGER,
    Description: Sequelize.TEXT,
  });
  return Suivie;
};
