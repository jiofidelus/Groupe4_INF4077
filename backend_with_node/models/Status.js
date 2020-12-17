/** @format */

module.exports = (sequelize, Sequelize) => {
  const Status = sequelize.define('status', {
    idStatus: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    libelleStatut: Sequelize.STRING,
    statut: Sequelize.BOOLEAN,
  });

  return Status;
};
