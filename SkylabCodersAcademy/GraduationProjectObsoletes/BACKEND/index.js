const express = require('express');
const morgan = require('morgan');
const { connect } = require('mongoose');
const debug = require('debug')('app');
const cors = require('cors');
const obsoletesApiRoutes = require('./src/router/obsoletesRouter');
const AuthRouter = require('./src/router/authRouter');

require('dotenv').config();

const app = express();
app.use(cors());
const port = process.env.PORT;

// const host = process.env.HOST_SKYLAB;
const host = process.env.HOST_CASA;

connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./src/passport')(app);

app.use('/obsoletes/api', obsoletesApiRoutes);
app.use('/obsoletes/api', AuthRouter);

app.listen(port, () => {
  debug(`Server running in ${`http://${host}:${port}`}`);
});
