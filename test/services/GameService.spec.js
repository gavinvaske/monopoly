const chance = require('chance').Chance();
const GameService = require('../../application/services/GameService');
const {GameModel} = require('../../application/models/GameModel');

jest.mock('../../application/models/GameModel')

afterEach(() => {
    jest.clearAllMocks();
});

describe('game service', () => {
    it('should find game if ID exists', async () => {
        // given
        const id = chance.integer();
        GameModel.findById.mockResolvedValue({});

        // when
        const game = await GameService.findGameById(id);

        // then
        expect(GameModel.findById).toHaveBeenCalledTimes(1);
        expect(GameModel.findById).toBeCalledWith(id);
    });

    it('should throw error if game is not found with ID', async () => {
        // given
        const id = chance.integer();
        GameModel.findById.mockResolvedValue(null);
        let errorMessage = '';

        try {
            // when
            await GameService.findGameById(id);
        } catch(e) {
            errorMessage = e.message;
        }

        // then
        expect(errorMessage).toEqual(`Could not find game using id ${id}`);
    });

    it('should increment the turn on the game', async () => {
        // given
        let game = {
            turnCounter: 0,
            save: jest.fn(),
            players: createNPlayers(100),
            board: {
                boardSpaces: createNBoardSpaces(100)
            }
        }
        const expectedTurnCounter = game.turnCounter + 1;

        // when
        game = await GameService.executeNextTurn(game);
        
        // then
        expect(game.turnCounter).toBe(expectedTurnCounter);
    });

    it('should move the player', async () => {
        // given
        const playerStartingPosition = 0;
        const player = {
            boardPosition: playerStartingPosition
        }
        let game = {
            turnCounter: 0,
            save: jest.fn(),
            players: [player],
            board: {
                boardSpaces: createNBoardSpaces(1000)
            }
        }

        // when
        game = await GameService.executeNextTurn(game);

        // then
        expect(game.players[0].boardPosition).toBeGreaterThan(playerStartingPosition);
    });

    it('should save the game', async () => {
        // given
        let game = {
            turnCounter: 0,
            save: jest.fn(),
            players: createNPlayers(100),
            board: {
                boardSpaces: createNBoardSpaces(1000)
            }
        }

        // when
        await GameService.executeNextTurn(game);
        
        // then
        expect(game.save).toHaveBeenCalledTimes(1);
    });

    function createNBoardSpaces(n) {
        const boardPositions = [];

        for (let i=0; i<n; i++) {
            boardPositions.push({
                positionOnBoard: i
            })
        }

        return boardPositions;
    }

    function createNPlayers(n) {
        const players = [];

        for (let i=0; i<n; i++) {
            players.push({
                boardPosition: 0
            })
        }

        return players;
    }
});