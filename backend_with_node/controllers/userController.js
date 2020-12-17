/** @format */

const { User } = require('../config/sync');
const fs = require('fs');
const mkdirp = require('mkdirp');
const sharp = require('sharp');
require('dotenv').config();
const path = require('path');

exports.update_profile = async (req, res, next) => {
  const data = req.body;
  const file = req.file;
  const pathArchive = path.resolve('public/archives/users');
  const user = {};

  try {
    if (file) {
      user.picture = req.file.filename;
    }
    if (data.password && data.password !== '') {
      user.password = data.password;
    }

    user.names = data.names;
    user.surnames = data.surnames;
    const newUser = await User.update(user, {
      where: { idUser: data.idUser },
      individualHooks: true,
    });

    if (newUser) {
      const idArchive = data.userIdArchive;
      const pathArchiveUser = `${pathArchive}/${idArchive}`;
      if (!fs.existsSync(pathArchiveUser)) {
        mkdirp.sync(pathArchiveUser);
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
          .toFile(`${pathArchiveUser}/${req.file.filename}`);
        fs.unlinkSync(req.file.path);
      }
    }

    res.status(200).send({ message: ' OK ' });
  } catch (error) {
    res.status(500).send({ errorMessage: error });
  }
};

exports.create_user = async (req, res, next) => {
  const data = req.body;
  const file = req.file;

  console.log(data);
  console.log(file);
  const pathArchive = path.resolve('public/archives/users');

  try {
    const existingUser = await User.findOne({
      where: { email: data.email },
    });

    if (existingUser) {
      return res
        .status(409)
        .send(`Cette email ${userData.email} est deja utilise`);
    }

    if (file) {
      data.picture = req.file.filename;
    }
    const newUser = await User.create(data);

    // factorise  ici dans une funcrion resize
    if (newUser) {
      const idArchive = newUser.userIdArchive;
      const pathArchiveUser = `${pathArchive}/${idArchive}`;
      if (!fs.existsSync(pathArchiveUser)) {
        mkdirp.sync(pathArchiveUser);
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
          .toFile(`${pathArchiveUser}/${req.file.filename}`);
        fs.unlinkSync(req.file.path);
      }
    }
    setTimeout(() => {
      res.status(200).send(newUser);
    }, 2000);
  } catch (error) {
    // Gestion des erreurs
    console.log(error);
    res.status(500).send({ errorMessage: error });
  }
};

exports.get_user = async (req, res) => {
  const idUser = req.params.id;
  try {
    const user = await User.findByPk(idUser, {});
    user
      ? res.status(200).send(user)
      : res.status(500).send({ errorMessage: 'Erreur Serveur' });
  } catch (error) {
    res.status(500).send({ errorMessage: error });
  }
};

exports.get_users = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ['password'],
      },
      order: [['names', 'ASC']],
    });
    users
      ? res.status(200).send(users)
      : res.status(500).send({ errorMessage: 'Erreur Serveur' });
  } catch (error) {
    res.status(500).send({ errorMessage: error });
  }
};
