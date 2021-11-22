const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ownedPropertiesSchema = new schema({
    boardSpaceId: {
        type: mongoose.Schema.ObjectId,
        ref: 'boardSpace'
    },
    playerId: {
        type: mongoose.Schema.ObjectId,
        ref: 'player'
    }
}, {
    timestamps: true
});

const OwnedProperties = mongoose.model('ownedProperties', ownedPropertiesSchema);

module.exports = OwnedProperties;