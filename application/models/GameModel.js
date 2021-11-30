const mongoose = require('mongoose');
const schema = mongoose.Schema;
const {PlayerSchema} = require('./PlayerModel');
const {BoardSchema} = require('./BoardModel');

const GameSchema = new schema({
    players: {
        type: [PlayerSchema],
        required: true
    },
    board: {
        type: BoardSchema,
        required: true
    }
}, {
    timestamps: true
});

const GameModel = mongoose.model('game', GameSchema);

module.exports = {
    GameSchema,
    GameModel
};