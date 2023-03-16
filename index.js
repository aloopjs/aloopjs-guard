const Auth = require('./object/auth');

module.exports = {
  register({ app, type }) {
    if (type === 'express')
      app.use((req, res, next) => {
        let guards = {};
        req.guard = function (g = null) {
          g = g || 'default';
          if (!guards[g]) guards[g] = new Auth();
          return guards[g];
        };

        next();
      });
  },

  boot({ app, type }) { }
};
