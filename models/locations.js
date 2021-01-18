const Locations = require('../data/locations');

const findAll = () => new Promise((resolve, reject) => {
  resolve(Locations);
})

const findByCountry = (country) => new Promise((resolve, reject) => {
  resolve(Locations.filter(location => location.country === country));
});

const findByQuery = (queries) => new Promise((resolve, reject) => {
  const entries = Object.entries(queries);

  resolve(
    Locations.filter((element) => entries.every(([key, value]) => element[key] === value))
  )
});



module.exports = {
  findAll,
  findByCountry,
  findByQuery,
}