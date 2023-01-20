const { Game } = require('../database/models');

const getAll = async () => Game.findAll();

module.exports = {
  getAll,
};
