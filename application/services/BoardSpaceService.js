const {BoardSpaceModel} = require('../models/BoardSpaceModel');

const MAX_BOARD_SPACE_COST = 300;
const MIN_BOARD_SPACE_COST = 50;

const MAX_BOARD_SPACE_RENT = 50;
const MIN_BOARD_SPACE_RENT = 5;

function createBoardSpaces(count) {
    let boardSpaces = [];

    for(let i=0; i<count; i++) {
        let isFreeSpace = getRandomBoolean();

        boardSpaces.push(new BoardSpaceModel({
            positionOnBoard: i,
            cost: isFreeSpace ? 0 : getRandomInt(MIN_BOARD_SPACE_COST, MAX_BOARD_SPACE_COST),
            payout: isFreeSpace ? 0 : getRandomInt(MIN_BOARD_SPACE_RENT, MAX_BOARD_SPACE_RENT)
        }))
    }

    return boardSpaces;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function getRandomBoolean() {
    return Math.random() < 0.5;
}

module.exports = {
    createBoardSpaces
}