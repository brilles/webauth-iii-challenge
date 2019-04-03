const db = require('../database/dbConfig.js');

module.exports = {
  add,
  findByUsername,
  find
};

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

async function add(user) {
  const id = await db('users').insert(user);
  const id1 = id[0];
  return findById(id1);
}

function findByUsername(username) {
  return db('users')
    .where({ username })
    .first();
}

function find(department) {
  return db('users')
    .select('username', 'department')
    .where({ department });
}
