const knex = require("../db/connection");

async function averageRating() {
  // your solution here
  const response = await knex("restaurants").avg("rating").first();
  return { average_rating: Number(response.avg) };
}

async function count() {
  // your solution here
  const response = await knex('restaurants').count('restaurant_name').first();
  return { count: parseInt(response.count) };
}

function create(newRestaurant) {
  return knex("restaurants")
    .insert(newRestaurant, "*")
    .then((createdRecords) => createdRecords[0]);
}

function destroy(restaurant_id) {
  return knex("restaurants").where({ restaurant_id }).del();
}

function list() {
  return knex("restaurants").select("*");
}

function read(restaurant_id) {
  return knex("restaurants").select("*").where({ restaurant_id }).first();
}

async function readHighestRating() {
  // your solution here
  const response = await knex('restaurants').max('rating').first();
  return { max_rating: Number(response.max).toFixed(2) };
}

function update(updatedRestaurant) {
  return knex("restaurants")
    .select("*")
    .where({ restaurant_id: updatedRestaurant.restaurant_id })
    .update(updatedRestaurant, "*");
}

module.exports = {
  averageRating,
  count,
  create,
  delete: destroy,
  list,
  read,
  readHighestRating,
  update,
};
