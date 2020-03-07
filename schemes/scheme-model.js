const db = require("../data/config");


function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({id:id}).first();
}

async function add(newScheme) {
  const [id] = await db("schemes").insert(newScheme);
  return await db("schemes").where("id",id).first();
}

function update(updatedScheme,id) {
  return db("schemes").where({id:id}).update(updatedScheme,id);
}

function remove(id) {
   return db("schemes").where({id:id}).del();
}

module.exports = {
  find, 
  findById,
  add,
  update,
  remove
}