require('express-async-errors');
require('dotenv').config();

const express = require('express');

const { PORT } = process.env;

const app = express();

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
