/** @format */

const { sequelize, Sequelize } = require('./connectionProvider');

const UserModel = require('../models/User');
const PatientModel = require('../models/Patient');
const SuivieModel = require('../models/Suivie');
const StructureModel = require('../models/Structure');
const RegionModel = require('../models/Region');
const EndPositionModel = require('../models/EndPosition');
const StatusModel = require('../models/Status');

//instance of each models

const User = UserModel(sequelize, Sequelize);
const Patient = PatientModel(sequelize, Sequelize);
const Suivie = SuivieModel(sequelize, Sequelize);
const Structure = StructureModel(sequelize, Sequelize);
const Region = RegionModel(sequelize, Sequelize);
const EndPosition = EndPositionModel(sequelize, Sequelize);
const Status = StatusModel(sequelize, Sequelize);

Patient.hasMany(Suivie);
Suivie.belongsTo(Patient);

Patient.hasOne(EndPosition);
Patient.belongsTo(Region);
Structure.hasMany(User);
User.belongsTo(Structure);
Patient.belongsTo(Status);
Status.hasMany(Patient);

sequelize.sync().then(() => {
  console.log('Databases & tables created!!');
});

module.exports = {
  User,
  Patient,
  Suivie,
  Structure,
  Status,
  Region,
  EndPosition,
};
