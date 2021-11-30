const mongoose = require('mongoose');
const schema = mongoose.Schema;

const PlayerSchema = new schema({
    boardPosition: {
        type: Number,
        required: false,
        default: 0
    },
    cashBalance: {
        type: Number,
        required: false,
        default: 1500    
    }
}, {
    timestamps: true
});


const PlayerModel = mongoose.model('player', PlayerSchema);

module.exports = {
    PlayerModel,
    PlayerSchema
};