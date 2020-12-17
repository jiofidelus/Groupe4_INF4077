/** @format */

var SuivieController = require('../controllers/suivieController');

module.exports = (app) => {
  app.post('/api/suivie', SuivieController.add_suivie);
  app.delete('/api/suivie/:id', SuivieController.delete_suivie);
};
