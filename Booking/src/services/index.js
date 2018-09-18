const booking = require('./booking/booking.service.js');
const movies = require('./movies/movies.service.js');
const shows = require('./shows/shows.service.js');
const theatre = require('./theatre/theatre.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(booking);
  app.configure(movies);
  app.configure(shows);
  app.configure(theatre);
};
