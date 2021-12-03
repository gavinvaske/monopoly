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
});