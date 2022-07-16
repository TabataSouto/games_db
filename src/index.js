require('express-async-errors');
const express = require('express');
require('dotenv').config();

const router = require('./routes');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

const { PORT } = process.env;

app.use(express.json());
app.use('/', router);

app.use(errorMiddleware);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Escutando na porta ${PORT}`);
});
