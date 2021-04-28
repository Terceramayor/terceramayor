const passport = require('passport');
const { Strategy } = require('passport-local');
const Users = require('../models/userModel');

function LocalStrategy() {
  passport.use(
    new Strategy(

      (username, password, done) => {
        (() => {
          Users.findOne({ username }, (err, user) => {
            if (err) {
              return done(err);
            }

            if (!user) {
              return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
              return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
          });
        })();
      }
    )

  );
}

module.exports = LocalStrategy;
