// Initializes the `shows` service on path `/shows`
const createService = require('feathers-sequelize');
const createModel = require('../../models/shows.model');
const hooks = require('./shows.hooks');
const filters = require('./shows.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'shows',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/shows', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('shows');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
