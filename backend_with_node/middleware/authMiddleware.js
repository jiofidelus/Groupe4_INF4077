/** @format */

const jwt = require('jsonwebtoken');
require('dotenv');

exports.refreshToken = () => {
  return (req, res, ext) => {};
};

exports.signToken = (user, secret, life) => {
  return jwt.sign({ user }, secret, { expiresIn: life });
};

exports.checkRole = (roles) => (req, res, next) => {
  const assignedRoles = req.user.roles[0];

  if (roles.every((_) => roles.includes(assignedRoles))) {
    return next();
  } else {
    return res.status(401).send('Insufficient role');
  }
};

exports.checkJwt = (req, res, next) => {
  if (req.headers && req.headers.authorization) {
    const authorization = req.headers.authorization.split(' ')[1];
    try {
      const decoded = jwt.verify(authorization, process.env.JWT_SECRET);
      req.user = decoded.user;
      next();
    } catch (error) {
      return res.status(401).send({ error: error.message });
    }
  }
};

const getScopesLists = (scopesArray) => {
  const scopes = [];
  scopesArray.map((scope) => {
    scopes.push(scope.indication);
  });
  return scopes;
};

exports.generateToken = (user) => {
  const scopes = getScopesLists(user.role.scopes);
  const options = {
    algorithm: process.env.ALGORITHM,
    expiresIn: '24h',
    issuer: process.env.ISSUER,
    subject: user.email,
    audience: scopes,
  };

  return jwt.sign({}, process.env.JWT_SECRET, options);
};
