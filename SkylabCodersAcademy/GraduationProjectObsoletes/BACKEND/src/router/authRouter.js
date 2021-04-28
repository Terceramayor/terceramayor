const { Router } = require('express');
const passport = require('passport');
const usersController = require('../controllers/usersController');

function AuthRouter() {
  const router = new Router();

  router
    .route('/user/register')
    .post(usersController.register);

  router
    .route('/user/login')
    .post(
      passport.authenticate('local'),
      usersController.logIn
    );

  router
    .route('/user/logout')
    .get(usersController.logOut);

  return router;
}

module.exports = AuthRouter();
