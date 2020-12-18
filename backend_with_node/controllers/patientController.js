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
const { decodeBase64Image } = require('../utils/shared');
require('dotenv').config();

exports.create_patient = async (req, res, next) => {
  var imageBuffer = decodeBase64Image(req.body.file);
  const patientData = req.body;
  const pathArchive = path.resolve('public/archives/patients');

  let filename = Date.now() + '.jpg';

  fs.writeFile(
    `./${pathArchive}/${filename}`,
    imageBuffer.data,
    function (err) {}
  );

  try {
    if (filename) {
      patientData.picture = filename;
    }
    const newPatient = await Patient.create(patientData);

    if (newPatient) {
      const idArchive = newPatient.patientIdArchive;
      const pathArchivesPatient = `${pathArchive}/${idArchive}`;
      if (!fs.existsSync(pathArchivesPatient)) {
        mkdirp.sync(pathArchivesPatient);
      }

      fs.writeFile(
        `${pathArchivesPatient}/${filename}`,
        imageBuffer.data,
        function (err) {}
      );
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
      ? setTimeout(() => {
          res.status(200).send({
            total: patients.count,
            data: patients.rows,
          });
        }, 3000)
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

exports.send_message = (req, res) => {
  const message = req.body.message;
  const phone = req.body.phone;
  const client = require('twilio')(
    process.env.ACCOUUNT_SID,
    process.env.AUTH_TOKEN
  );
  client.messages
    .create({
      body: message,
      from: process.env.PHONE_NUMBER,
      to: phone,
    })
    .then((message) =>
      res.status(200).send({ message: `message envoye ${message}` })
    )
    .catch((error) => {
      console.log(error);
      res.status(500).send({ errorMessage: error });
    });
};
