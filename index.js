const express = require('express');
const schedule = require('./schedule');
const locationsController = require('./controllers/locations');
const coachesController = require('./controllers/coaches');
const caloriesController = require('./controllers/calories');

const app = express();
const port = process.env.PORT | 80;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
})

app.get('/', (req, res) => {
  res.send('');
});

app.get('/locations/:country', (req, res) => {
  locationsController.getByCountry(req, res);  
})

app.get('/locations', (req, res) => {
  locationsController.getAll(req, res);
});

app.get('/coaches', (req, res) => {
  coachesController.getAll(req, res);
})

app.get('/coaches/:locationId', (req, res) => {
  coachesController.getByCountry(req, res);
})

app.get('/schedule', (req, res) => {
  res.json(schedule);
});

app.get('/schedule/:locationId', (req, res) => {
  const result = schedule.find(({ locationId }) => locationId.toString() === req.params.locationId);

  res.json(result);
});

app.post('/calculate-calories', (req, res) => {
  caloriesController.calculateCalories(req, res);
})

app.listen(port, () => console.log(`Example app listening on localhost:${port}!`));