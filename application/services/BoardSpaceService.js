const {BoardSpaceModel} = require('../schema/boardSpace');

function buildBoardSpaces(count) {
    let boardSpaces = [];

    for(let i=0; i<count; i++) {
        boardSpaces.push(buildBoardSpace())
    }

    return boardSpaces;
}

function buildBoardSpace() {
    return new BoardSpaceModel();
}

module.exports = {
    buildBoardSpaces
}