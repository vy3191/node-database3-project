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

//This is a stretch goal
async function addStep(step, scheme_id) {
  const newStep = {...step, scheme_id};
  const [id] =  await db("steps").insert(newStep);
  return await db("steps").where({id:id}).first();
}

module.exports = {
  find, 
  findById,
  add,
  update,
  remove,
  addStep,
  findSteps
}