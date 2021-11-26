const mongoose = require('mongoose');
const schema = mongoose.Schema;

const PlayerSchema = new schema({
    boardPosition: {
        type: Number,
        required: false
    },
    cashBalance: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});


const PlayerModel = mongoose.model('player', PlayerSchema);

module.exports = {
    PlayerModel,
    PlayerSchema
};