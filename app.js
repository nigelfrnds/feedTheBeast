require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const axios = require('axios');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.status(200).send({ message: 'fuck you1' });
});

app.get('/api/:food', async (req, res) => {
    const { food } = req.params;
    const { APP_ID, APP_KEY } = process.env;

    const { data: { hits } } = await axios.get(`https://api.edamam.com/search?q=chicken&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`);
    res.send({ message: hits[0] });
});

module.exports = app;