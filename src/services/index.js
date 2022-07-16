const { Asset } = require('../database/models');

const getAll = async () => Asset.findAll();

module.exports = {
  getAll,
};
