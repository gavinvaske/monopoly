const mongoose = require('mongoose');
const schema = mongoose.Schema;
const {PlayerSchema} = require('./player');
const {BoardSpaceSchema} = require('./boardSpace');

const boardSchema = new schema({
    players: {
        type: [PlayerSchema],
        required: true
    },
    boardSpaces: {
        type: [BoardSpaceSchema],
        required: false
    }
}, {
    timestamps: true
});

const Board = mongoose.model('board', boardSchema);

module.exports = Board;