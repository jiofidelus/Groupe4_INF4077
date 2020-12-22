/** @format */

const { Sequelize } = require('sequelize');
const { Region, Patient } = require('../config/sync');

exports.get_stat_one = async (req, res, next) => {
  try {
    const regions = await Region.findAll({
      include: [Patient],
      attributes: {
        include: [
          [
            Sequelize.fn('COUNT', Sequelize.col('patients.idPatient')),
            'PatientCount',
          ],
        ],
      },
      group: ['patients.idPatient', 'region.idRegion'],
    });

    setTimeout(() => {
      res.status(200).send(regions);
    }, 2000);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ errorMessage: error });
  }
};
