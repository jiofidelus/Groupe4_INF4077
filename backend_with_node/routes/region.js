/** @format */

var regionController = require('../controllers/regionController');

module.exports = (app) => {
  app.get('/api/regions/statone', regionController.get_stat_one);
};
