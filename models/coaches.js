const Coaches = require('../data/coaches.json');

const findAll = () => new Promise((resolve, reject) => {
  resolve(Coaches);
})

const findAllByLocation = (locationId) => new Promise((resolve, reject) => {
  resolve(Coaches.filter(coach => coach.location_id.toString() === locationId));
})

module.exports = {
  findAll,
  findAllByLocation,
}