const express = require('express');
const router = express.Router();
const PlayerService = require('../services/PlayerService');
const BoardSpaceService = require('../services/BoardSpaceService');
const {GameModel} = require('../models/GameModel');
const {BoardModel} = require('../models/BoardModel');
const GameService = require('../services/GameService');

router.post('/', (request, response) => {
    const requestBody = request.body;
    const numberOfPlayers = requestBody.numberOfPlayers;
    const numberOfBoardSpaces = requestBody.numberOfBoardSpaces;

    console.log(`Starting a game with ${numberOfPlayers} players and ${numberOfBoardSpaces} board spaces`)

    const players = PlayerService.createPlayers(numberOfPlayers);
    const boardSpaces = BoardSpaceService.createBoardSpaces(numberOfBoardSpaces);

    const board = new BoardModel({
        boardSpaces: boardSpaces
    });

    const game = new GameModel({
        board: board,
        players: players
    })

    game.save((error, document) => {
        if (error) {
            console.log(JSON.stringify(error));
            response.send(error.message);
        }
        response.send(document._id)
    });
});

router.get('/:id', (request, response) => {
    const id = request.params.id;

    GameModel.findById(id, (error, document) => {
        if (error) {
            console.log(JSON.stringify(error));
            response.status(404);
            response.send("No game was found using the provided ID");
        }
        response.send(document);
    });
});

router.get('/:id/dice-roll', async (request, response) => {
    const id = request.params.id;
    const game = await GameService.findGameById(id);

    console.log(game)
    console.log(`current turn = ${game.turnCounter}`);
    const currentTurn = game.turnCounter;

    GameService.executeNextTurn(game);

    response.send(game);
});

module.exports = router;