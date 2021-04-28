const express = require('express');
const morgan = require('morgan');
const { connect } = require('mongoose');
const debug = require('debug')('app');
const profarmaApiRoutes = require('./routes/productRouter');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/profarma/api', profarmaApiRoutes);

app.listen(port, () => {
  debug(`Server running in ${`http://localhost:${port}`}`);
});
