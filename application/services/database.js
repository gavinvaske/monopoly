const mongoose = require('mongoose');

function connectToDatabase(databaseUrl) {
    if (!databaseUrl) {
        throw new Error('Database URL is not defined');
    };

    mongoose.connect(databaseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

module.exports = {
    connectToDatabase
};