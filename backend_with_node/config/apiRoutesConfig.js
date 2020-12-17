/** @format */

const ConfigApiRoutes = (app) => {
  require('../routes/auth')(app);
  require('../routes/index')(app);
};

module.exports = ConfigApiRoutes;
