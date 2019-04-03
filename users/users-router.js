const router = require('express').Router();

const Users = require('./users-model.js');

router.get('/', async (req, res) => {
  try {
    const users = await Users.find(req.decodedJwt.department);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
