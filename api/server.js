const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const registerRouter = require('../auth/register/register-router.js');
const loginRouter = require('../auth/login/login-router.js');
const usersRouter = require('../users/users-router.js');
const restricted = require('../auth/middlewares/restricted.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.send('success');
});

// Open routes
server.use('/api/register', registerRouter);
server.use('/api/login', loginRouter);

// Restricted Routes
server.use('/api/users', restricted, usersRouter);

module.exports = server;
