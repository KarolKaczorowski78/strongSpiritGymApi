const { findAll, findAllByLocation } = require('../models/coaches');

const getAll = async (req, res) => {
  res.json(await findAll());
}

const getByCountry = async (req, res) => {
  res.json(await findAllByLocation(req.params.locationId));
}


module.exports = {
  getAll,
  getByCountry,
}