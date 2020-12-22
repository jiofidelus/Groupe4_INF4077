/** @format */

module.exports = (sequelize, Sequelize) => {
  const Position = sequelize.define('position', {
    idPostion: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    libellePositon: Sequelize.STRING,
    description: Sequelize.TEXT,
  });
  return Position;
};
