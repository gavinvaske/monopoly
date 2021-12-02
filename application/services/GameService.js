const Chance = require('chance').Chance();
const {GameModel} = require('../models/GameModel');

const MIN_DICE_ROLL = 2;
const MAX_DICE_ROLL = 12;

async function findGameById(id) {
    const game = await GameModel.findById(id);

    if (!game) {
        throw new Error(`Could not find game using id ${id}`);
    }

    return game;
}

async function executeNextTurn(game) {
    const turnCounter = game.turnCounter;
    const diceRoll = rollDice();
    const currentPlayer = game.players[turnCounter];

    game.turnCounter = getIndexOfNextPlayer(turnCounter, game.players);
    currentPlayer.boardPosition = ((currentPlayer.boardPosition + diceRoll) % game.board.boardSpaces.length);

    await game.save();
    
    return game;
}

function rollDice() {
    return Chance.integer({min: MIN_DICE_ROLL, max: MAX_DICE_ROLL});
}

function getIndexOfNextPlayer(turnCounter, players) {
    return ((turnCounter + 1) % players.length);
}

module.exports = {
    findGameById,
    executeNextTurn
}