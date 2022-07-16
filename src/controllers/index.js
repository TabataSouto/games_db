const service = require('../services');

const getAll = async (req, res) => {
  const assets = await service.getAll();
  res.status(200).json(assets);
};

module.exports = {
  getAll,
};
