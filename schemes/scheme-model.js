const db = require("../data/config");


function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({id:id}).first();
}
 
async function findSteps(id) {
  return await db("steps")
         .join("schemes", "schemes.id", "steps.scheme_id")
         .where({"steps.scheme_id":id})
         .select("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions")
         .orderBy("steps.step_number")
}
async function add(newScheme) {
  const [id] = await db("schemes").insert(newScheme);
  return await db("schemes").where("id",id).first();
}

async function update(updatedScheme,id) {
  const count = await db("schemes").where({id:id}).update(updatedScheme,id);
  if(count) {
     return await db("schemes").where("id", id).first();
  }
}

function remove(id) {
   return db("schemes").where({id:id}).del();
}

module.exports = {
  find, 
  findById,
  add,
  update,
  remove,
  findSteps
}