const express = require('express');
const morgan = require('morgan');
const { connect } = require('mongoose');
const debug = require('debug')('app');
const bodyParser = require('body-parser');
const profarmaApiRoutes = require('./src/router/productRouter');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// const host = process.env.HOST_SKYLAB;
const host = process.env.HOST_CASA;

connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/megaCo/api', profarmaApiRoutes);

app.listen(port, () => {
  debug(`Server running in ${`http://${host}:${port}`}`);
});
