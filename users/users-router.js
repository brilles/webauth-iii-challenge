const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/middlewares/restricted.js');

router.get('/', restricted, async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
