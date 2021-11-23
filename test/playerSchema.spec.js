const PlayerSchema = require('../application/schema/player');
const chance = require('chance').Chance();

describe('validate player schema', () => {
    describe('should pass validation', () => {
        let player;

        beforeEach(() => {
            player = {
                boardPosition: chance.integer(),
                cashBalance: chance.integer()
            };
        });

        it('should pass validation when all attributes are defined correctly', () => {
            validateSchema(player, true);
        });

        it('should succeed if boardPosition is not defined', () => {
            delete player.boardPosition;

            validateSchema(player, true);
        });
    });

    describe('should fail validation', () => {
        let player;

        beforeEach(() => {
            player = {
                boardPosition: chance.integer(),
                cashBalance: chance.integer()
            };
        });

        it('should fail if cashBalance is not defined', () => {
            delete player.cashBalance;

            validateSchema(player, false);
        });

        it('should fail if cashBalance is not a number', () => {
            player.cashBalance = chance.string();

            validateSchema(player, false);
        });

        it('should fail if boardPosition is not a number', () => {
            player.boardPosition = chance.string();

            validateSchema(player, false);
        });
    });
});


function validateSchema(attributes, shouldValidate) {
    const playerSchema = new PlayerSchema(attributes);
    const errors = playerSchema.validateSync();
    const isValid = !errors;

    expect(isValid).toBe(shouldValidate);
}