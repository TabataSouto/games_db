const service = require('../services');

const getAll = async (req, res) => {
  const games = await service.getAll();
  res.status(200).json(games);
};

module.exports = {
  getAll,
};
