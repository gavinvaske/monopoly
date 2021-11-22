const mongoose = require('mongoose');
const schema = mongoose.Schema;

const spaceTypeSchema = new schema({
    type: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const SpaceType = mongoose.model('spaceType', spaceTypeSchema);

module.exports = SpaceType;