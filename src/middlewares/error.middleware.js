module.exports = (error, _req, res) => {
  res.status(error.status || 500)
    .json({ message: error.message || 'Erro inesperado. Por favor, tente mais tarde' });
};
