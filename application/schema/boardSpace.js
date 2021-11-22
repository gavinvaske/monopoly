const mongoose = require('mongoose');
const schema = mongoose.Schema;

const boardSpaceSchema = new schema({
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
    spaceTypeId: {
        type: mongoose.Schema.ObjectId,
        ref: 'spaceType'
    }
}, {
    timestamps: true
});

const BoardSpace = mongoose.model('boardSpace', boardSpaceSchema);

module.exports = BoardSpace;