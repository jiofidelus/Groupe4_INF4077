/** @format */

require('dotenv').config({ path: './variables.env' });
const { User } = require('../config/sync');
const { generateToken } = require('../middleware/authMiddleware');
const { delayResponse } = require('../utils/shared');
const jwt = require('jsonwebtoken');

exports.logout = async (req, res) => {};

exports.register = async (req, res) => {
  try {
    const { names, surnames, email, password } = req.body;

    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(409).send(`Cette email ${email} est deja utilise`);
    }

    const submittedUser = {
      names,
      surnames,
      password,
      email,
    };

    const user = await User.create(submittedUser);

    user
      ? delayResponse(() =>
          res.status(201).json({
            user: user,
          })
        )
      : delayResponse(() =>
          res.status(500).json({
            errorMessage: 'Erreur sur le serveur',
          })
        );
  } catch (error) {
    // ajouter un delay response
    console.log(error);
    throw new Error('error');
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let existingUser = await User.findOne({
      where: { email },
    });

    if (existingUser && (await existingUser.passwordIsValid(password))) {
      const userInfo = {
        idUser: existingUser.idUser,
        names: existingUser.names,
        surnames: existingUser.surnames,
        email: existingUser.email,
        picture: existingUser.picture,
        userIdArchive: existingUser.userIdArchive,
      };
      const token = generateToken(existingUser);

      delayResponse(() =>
        res.status(200).json({
          token: token,
          user: userInfo,
        })
      );
    } else {
      return delayResponse(() =>
        res.status(500).send({
          error: 'Mot de passe ou email incorrect',
        })
      );
    }
  } catch (error) {
    console.log(error);
    delayResponse(() =>
      res.status(500).send({
        error: 'il ya erreur ici sur la connexion',
      })
    );
  }
};

exports.verifyToken = async (req, res, next) => {
  if (req.headers && req.headers.authorization) {
    const authorization = req.headers.authorization.split(' ')[1];
    try {
      const decoded = jwt.verify(authorization, process.env.JWT_SECRET);
      if (!decoded) {
        next(new Error('No user with that id'));
      } else {
        res.status(200).send('valid token');
      }
    } catch (error) {
      return res.status(401).send(error.message);
    }
  }
};
