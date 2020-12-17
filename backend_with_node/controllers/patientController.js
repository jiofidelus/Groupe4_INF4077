/** @format */

const {
  Patient,
  Suivie,
  Status,
  Region,
  EndPosition,
} = require('../config/sync');
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const sharp = require('sharp');
const { setTimeout } = require('timers');

exports.create_patient = async (req, res, next) => {
  const patientData = req.body;
  const file = req.file;
  const pathArchive = path.resolve('public/archives/patients');

  try {
    if (file) {
      patientData.picture = req.file.filename;
    }
    const newPatient = await Patient.create(patientData);

    if (newPatient) {
      const idArchive = newPatient.personnelIdArchive;
      const pathArchivesPatient = `${pathArchive}/${idArchive}`;
      if (!fs.existsSync(pathArchivesPatient)) {
        mkdirp.sync(pathArchivesPatient);
      }
      if (req.file) {
        await sharp(req.file.path)
          .resize({
            width: 200,
            height: 200,
          })
          .jpeg({
            quality: 90,
          })
          .toFile(`${pathArchivesPatient}/${req.file.filename}`);
        fs.unlinkSync(req.file.path);
      }
    }
    setTimeout(() => {
      res.status(200).send(newPatient);
    }, 2000);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ errorMessage: error });
  }
};

exports.read_patients = async (req, res, next) => {
  try {
    const patients = await Patient.findAndCountAll({
      include: [Region, Suivie, Status, EndPosition],
    });

    patients
      ? res.status(200).send({
          total: patients.count,
          data: patients.rows,
        })
      : res.status(500).send('erreur sur la requete');
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.read_patient = async (req, res, next) => {
  const id = req.params.idPatient;
  try {
    const patient = await Patient.findOne({
      include: [Region, Suivie, Status, EndPosition],
      where: {
        idPatient: id,
      },
    });

    patient
      ? res.status(200).send(patient)
      : res.status(500).send('erreur sur la requete');
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.read_patients = async (req, res, next) => {
  try {
    const patients = await Patient.findAndCountAll({
      include: [Region, Suivie, Status, EndPosition],
    });

    patients
      ? res.status(200).send({
          total: patients.count,
          data: patients.rows,
        })
      : res.status(500).send('erreur sur la requete');
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.update_patient = async (req, res, next) => {
  const idPatient = req.params.idPatient;
  const data = req.body;
  try {
    await Patient.update(data, {
      where: idPatient,
    });
    res.status(200).send({ idPatient });
  } catch (error) {
    return res.status(500).send({ errorMessage: error });
  }
};

exports.delete_patient = async (req, res, next) => {
  const idPatient = req.params.idPatient;
  try {
    await Patient.drop({
      where: { idPatient: idPatient },
    });

    res.status(200).send('patient supprime');
  } catch (error) {
    return res.status(500).send({ errorMessage: error });
  }
};

exports.get_status_patient = async (req, res, next) => {
  try {
    const suspect = await Patient.findAndCountAll({
      include: [
        {
          model: Status,
          where: {
            idStatus: 1,
          },
        },
      ],
    });

    const declares = await Patient.findAndCountAll({
      include: [
        {
          model: Status,
          where: {
            idStatus: 2,
          },
        },
      ],
    });

    const horsdanger = await Patient.findAndCountAll({
      include: [
        {
          model: Status,
          where: {
            idStatus: 3,
          },
        },
      ],
    });

    setTimeout(() => {
      res.status(200).send({
        suspect: suspect.count,
        declares: declares.count,
        horsdanger: horsdanger.count,
      });
    }, 2000);
  } catch (error) {
    return res.status(500).send({ errorMessage: error });
  }
};
