const booking = require('./booking/booking.service.js');
const movies = require('./movies/movies.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(booking);
  app.configure(movies);
};
