// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const movies = require('./movies.model');
const theatre = require('./theatre.model');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const shows = sequelizeClient.define('shows', {
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    daytime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    movie_id: {
      type: DataTypes.INTEGER,
      references: {
        model: movies,
        key: 'id'
      }
    },
    theatre_id: {
      type: DataTypes.INTEGER,
      references: {
        model: theatre,
        key: 'id'
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'createdat'
    },
    updatedAt: {

      type: DataTypes.DATE,
      field: 'updatedat'
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  shows.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return shows;
};
