/** @format */

const { Suivie } = require('../config/sync');

exports.add_suivie = async (req, res, next) => {
  const patientData = req.body;
  try {
    const suivie_ligne = await Suivie.create(patientData);
    suivie_ligne
      ? res.status(200).send(suivie_ligne)
      : res.status(500).send('erreur sur la requete');
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.delete_suivie = async (req, res, next) => {
  const id = req.params.id;
  try {
    await Suivie.drop({
      where: { idSuivie: id },
    });

    res.status(200).send('ligne Supprime');
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
