const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(hobbit) {
  const  [ id ]  = await db('hobbits').insert(hobbit, 'id');

  return db('hobbits')
    .where({ id })
    .first();
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return db('hobbits')
    .where({ id })
    .del();
}

function getAll() {
  return db('hobbits');
}

function findById(id) {
  return db('hobbits')
    .where({ id })
    .first();
}