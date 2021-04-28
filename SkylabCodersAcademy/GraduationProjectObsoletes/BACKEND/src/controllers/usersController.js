const md5 = require('md5');
const Users = require('../models/userModel');

function usersController() {
  async function register(required, response) {
    const { username, password } = required.body;

    try {
      const user = await Users.findOne({ username }).exec();

      if (user === null) {
        const newUser = new Users({
          username,
          password: md5(password)
        });
        await newUser.save();
        response.send(true);
      } else {
        response.send(false);
      }
    } catch (error) {
      response.status(500);
      response.send(error);
    }
  }

  function logIn(req, res) {
    res.status(200);
    res.json(req.body);
  }

  function logOut(req, res) {
    req.logout();
    res.status(200);
    res.json(req.body);
  }

  return {
    register,
    logIn,
    logOut
  };
}

module.exports = usersController();
