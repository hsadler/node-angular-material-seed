
module.exports = function (app, express) {
  var sampleRouter = express.Router();

  app.use('/api/sample', sampleRouter);

  // inject our routers into their respective route files
  require('../sample/sampleRoutes.js')(sampleRouter);
};
