const mongoose = require('mongoose');
const schema = mongoose.Schema;

const BoardSpaceSchema = new schema({
    cost: {
        type: Number,
        required: false
    },
    payout: {
        type: Number,
        required: false
    },
    numberOfHouses: {
        type: Number,
        required: false
    },
    numberOfHotels: {
        type: Number,
        required: false
    },
    owner: {
        type: mongoose.Schema.ObjectId,
        ref: 'player',
        required: false
    },
    positionOnBoard: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const BoardSpaceModel = mongoose.model('boardSpace', BoardSpaceSchema);

module.exports = {
    BoardSpaceModel,
    BoardSpaceSchema
};