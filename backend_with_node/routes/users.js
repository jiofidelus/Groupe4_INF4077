/** @format */

var UserController = require('../controllers/userController');
var upload = require('../config/multerConfig');

module.exports = (app) => {
  app.put('/api/users', upload.single('file'), UserController.update_profile);
  app.post('/api/users', upload.single('file'), UserController.create_user);
  app.get('/api/users/:id', UserController.get_user);
  app.get('/api/users', UserController.get_users);
};
