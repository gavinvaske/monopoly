const {BoardSpaceModel} = require('../models/BoardSpaceModel');
const Chance = require('chance').Chance();

const MAX_BOARD_SPACE_COST = 300;
const MIN_BOARD_SPACE_COST = 50;

const MAX_BOARD_SPACE_RENT = 50;
const MIN_BOARD_SPACE_RENT = 5;

function createBoardSpaces(count) {
    let boardSpaces = [];

    for(let i=0; i<count; i++) {
        let isFreeSpace = Chance.bool();

        boardSpaces.push(new BoardSpaceModel({
            positionOnBoard: i,
            cost: isFreeSpace ? 0 : Chance.integer({min: MIN_BOARD_SPACE_COST, max: MAX_BOARD_SPACE_COST}),
            payout: isFreeSpace ? 0 : Chance.integer({min: MIN_BOARD_SPACE_RENT, max: MAX_BOARD_SPACE_RENT})
        }))
    }

    return boardSpaces;
}

module.exports = {
    createBoardSpaces
}