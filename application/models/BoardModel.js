const mongoose = require('mongoose');
const schema = mongoose.Schema;
const {BoardSpaceSchema} = require('./BoardSpaceModel');

const BoardSchema = new schema({
    boardSpaces: {
        type: [BoardSpaceSchema],
        required: true
    }
}, {
    timestamps: true
});

const BoardModel = mongoose.model('board', BoardSchema);

module.exports = {
    BoardSchema,
    BoardModel
};