require('dotenv').config();
const express = require('express');
const {connectToDatabase} = require('./services/databaseService');
const mongoose = require('mongoose');

const defaultPort = 8000;
const PORT = process.env.PORT || defaultPort;
console.log(`port = ${PORT}`);
console.log(`db = ${process.env.DATABASE_URL}`);

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', require('./controllers/index'));
app.use('/boards', require('./controllers/board'));
// app.use('/players', require('./controllers/player'));
// app.use('/board-spaces', require('./controllers/boardSpace'));

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