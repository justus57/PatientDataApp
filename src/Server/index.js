const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/records');
const Model = require('./model');
const hostname = '127.0.0.1';
const port = 5000;

mongoose.connect("mongodb+srv://nodjs:nodejs@nodejs1.ubyhmwp.mongodb.net/PatientDataMgt");
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());
app.use(routes)

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})