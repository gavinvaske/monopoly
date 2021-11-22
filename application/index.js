require('dotenv').config();
const express = require('express');
const {connectToDatabase} = require('./services/database');
const mongoose = require('mongoose');

const defaultPort = 8080;
const PORT = process.env.PORT || defaultPort;
console.log(`port = ${PORT}`);
console.log(`db = ${process.env.DATABASE_URL}`);

const app = express();

app.use('/', require('./controllers/index'));
app.use('/board', require('./controllers/board'));

connectToDatabase(process.env.DATABASE_URL);
const databaseConnection = mongoose.connection;

databaseConnection.on('error', (error) => {
    throw new Error(`Error connecting to the database: ${error}`);
});

databaseConnection.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server started listening on PORT = ${PORT}`);
    });
});