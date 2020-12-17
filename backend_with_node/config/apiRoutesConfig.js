/** @format */

const ConfigApiRoutes = (app) => {
  require('../routes/auth')(app);
  require('../routes/index')(app);
  require('../routes/users')(app);
  require('../routes/patient')(app);
};

module.exports = ConfigApiRoutes;
