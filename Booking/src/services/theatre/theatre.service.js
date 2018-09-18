// Initializes the `theatre` service on path `/theatre`
const createService = require('feathers-sequelize');
const createModel = require('../../models/theatre.model');
const hooks = require('./theatre.hooks');
const filters = require('./theatre.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'theatre',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/theatre', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('theatre');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
