const { findAll, findByCountry, findByQuery } = require('../models/locations');

const getAll = async (req, res) => {
  const result = await (Object.values(req.query).length > 0 ? findByQuery(req.query) : findAll());
  
  res.json(result);
}

const getByCountry = async (req, res) => {
  const result = await findByCountry(req.params.country);

  res.json(result);
}

module.exports = {
  getAll,
  getByCountry,
}