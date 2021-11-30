const {PlayerModel} = require('../models/PlayerModel')

function createPlayers(numberOfPlayers) {
    let players = [];

    for (let i=0; i<numberOfPlayers; i++) {
        players.push(new PlayerModel())
    }

    return players;
}

module.exports = {
    createPlayers
}