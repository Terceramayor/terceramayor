const express = require('express');
const morgan = require('morgan');
const { connect } = require('mongoose');
const debug = require('debug')('app');
const cors = require('cors');
const cvRouter = require('./routes/cvRouter');
require('dotenv').config();

connect(process.env.MONGODB_CREDENTIALS, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/pablomartinezCV/api', cvRouter);

app.listen(process.env.RUNNIG_PORT, () => {
  debug(`Server running in ${`http://localhost:${process.env.RUNNIG_PORT}`}`);
});
