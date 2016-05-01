var SampleController = require('./SampleController');

module.exports = function(route) {
  route.get('/sampleGet', SampleController.sampleGet);
};
