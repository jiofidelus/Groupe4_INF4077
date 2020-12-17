/** @format */

module.exports = (sequelize, Sequelize) => {
  const Region = sequelize.define('region', {
    idRegion: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    libelleRegion: Sequelize.STRING,
    Abreviation: Sequelize.STRING,
  });

  return Region;
};
