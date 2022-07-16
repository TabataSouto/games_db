require('express-async-errors');
const express = require('express');
require('dotenv').config();

const app = express();

const { PORT } = process.env;

app.use(express.json());

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Escutando na porta ${PORT}`);
});
