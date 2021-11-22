const mongoose = require('mongoose');
const schema = mongoose.Schema;

const boardSchema = new schema({
    position: {
        type: Number,
        required: true
    },
    boardSpaceId: {
        type: mongoose.Schema.ObjectId,
        ref: 'boardSpace',
        required: true
    }
}, {
    timestamps: true
});

const Board = mongoose.model('board', boardSchema);

module.exports = Board;