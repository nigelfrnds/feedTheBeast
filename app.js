require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const axios = require('axios');
const path = require('path');
const cors = require('cors');

const userRoutes = require('./routes/user');
const mealScheduleRoutes = require('./routes/mealSchedule');
const mealRoutes = require('./routes/meal');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_CONFIG);

const db = mongoose.connection
    .once('open', () => console.log('Connected to MongoDB'))
    .on('error', error => console.warn('Warning: ', error));
    
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get('/api', (req, res) => {
//     res.status(200).send({ message: 'fuck you1' });
// });

app.use('/users', userRoutes);
app.use('/schedules', mealScheduleRoutes);
app.use('/meals', mealRoutes);
app.use(express.static(path.join(__dirname, 'client', 'build', 'index.html' )));

// app.get('/api/:food', async (req, res) => {
//     const { food } = req.params;
//     const { APP_ID, APP_KEY } = process.env;
//
//     const { data: { hits }, status } = await axios.get(`https://api.edamam.com/search?q=chicken&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`);
//     res.send({ message: hits[0], length: hits.length });
// });
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.use((req, res) => {
    res.status(404).send({ message: '404 Not Found' });
});


module.exports = app;
