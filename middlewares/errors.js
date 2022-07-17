// eslint-disable-next-line no-unused-vars
module.exports = (error, _req, res, _next) => {
  res.status(error.status || 500)
    .json({ message: error.message || 'Erro inesperado. Por favor, tente mais tarde' });
};
