require('express-async-errors');
require('dotenv').config();
const express = require('express');

const router = require('./routes');

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use('/assets', router);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
