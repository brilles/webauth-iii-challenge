const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../../users/users-model.js');

router.post('/', async (req, res) => {
  let user = req.body;
  const hashedPassword = bcrypt.hashSync(user.password, 10);
  user.password = hashedPassword;

  try {
    const savedUser = await Users.add(user);
    res.status(201).json(savedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'User could not be added.' });
  }
});

module.exports = router;
