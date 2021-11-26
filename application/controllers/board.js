const express = require('express');
const router = express.Router();

const Board = require('../schema/board');
const BoardSpaceService = require('../services/BoardSpaceService')

/* Create */
router.post('/', async (request, response) => {
    const board = new Board(request.body);

    const hasNoBoardSpaces = !board.boardSpaces || board.boardSpaces.length === 0

    if (hasNoBoardSpaces) {
        board.boardSpaces = BoardSpaceService.buildBoardSpaces(10);
    }

    board.save((error, document) => {
        if (error) {
            console.log(JSON.stringify(error));
            response.send(error.message);
        }
        response.send(document)
    });
});

/* Read */
router.get('/:id', (request, response) => {
    const id = request.params.id;

    Board.findById(id, (error, document) => {
        if (error) {
            console.log(JSON.stringify(error));
            response.send(error.message);
        }
        response.send(document);
    });
});

/* Update */
router.put('/:id', (request, response) => {
    response.send('todo');
});

/* Delete */
router.delete('/:id',  (request, response) => {
    response.send('todo');
});

module.exports = router;