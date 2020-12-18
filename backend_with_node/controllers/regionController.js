/** @format */

const { Sequelize } = require('sequelize');
const { Region, Patient } = require('../config/sync');

// exports.get_stat_one = async (req, res, next) => {
//   try {
//     const regions = await Region.findAll({
//       include: [Patient],
//       attributes: {
//         include: [
//           [
//             Sequelize.fn('COUNT', Sequelize.col('patients.regionIdRegion')),
//             'PatientCount',
//           ],
//         ],
//       },
//       group: [
//         'patients.regionIdRegion',
//         'region.idRegion',
//         'patients.idPatient',
//       ],
//     });

//     setTimeout(() => {
//       res.status(200).send(regions);
//     }, 2000);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send({ errorMessage: error });
//   }
// };

exports.get_stat_one = async (req, res, next) => {
  let statistiques = [];
  try {
    const regions = await Region.findAll({
      include: [Patient],
    });

    regions.map((region) => {
      statistiques = [
        ...statistiques,
        {
          libelleRegion: region.libelleRegion,
          PatientCount: region.patients.length,
        },
      ];
    });

    setTimeout(() => {
      res.status(200).send(statistiques);
    }, 2000);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ errorMessage: error });
  }
};
