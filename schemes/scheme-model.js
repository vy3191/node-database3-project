const db = require("../data/config");


function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({id:id});
}

function add(newScheme) {
  return db("schemes").insert(newScheme);
}

module.exports = {
  find, 
  findById,
  add
}