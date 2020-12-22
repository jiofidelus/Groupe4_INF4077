/** @format */

var authController = require('../controllers/authController');

module.exports = (app) => {
  app.get('/api/users/me', authController.verifyToken);
  app.post('/api/users/login', authController.login);
  app.post('/api/users/register', authController.register);
  app.post('/api/users/logout', authController.logout);
};
