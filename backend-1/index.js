const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to homepage');
});

app.get('/home', (req, res) => {
    res.send('Welcome to home route');
});

module.exports = app;