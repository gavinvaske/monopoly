const mongoose = require('mongoose');
const schema = mongoose.Schema;

const playerSchema = new schema({
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


const PlayerSchema = mongoose.model('playerSchema', playerSchema);

module.exports = PlayerSchema;