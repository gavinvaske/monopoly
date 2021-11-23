const SpaceTypeSchema = require('../application/schema/spaceType');
const chance = require('chance').Chance();

describe('validate spaceType schema', () =>{
    describe('passes validation', () => {
        let spaceType;
    
        beforeEach(() => {
            spaceType = {
                type: chance.string()
            }
        });
        
        it('should succeed when required attributes are defined', () => {
            validateSchema(spaceType, true);
        });
    });
    
    describe('fails validation', () => {
        let spaceType;
    
        beforeEach(() => {
            spaceType = {
                type: chance.string()
            }
        });
        
        it('should fail when type is not defined', () => {
            delete spaceType.type;
    
            validateSchema(spaceType, false);
        });
    });
});

function validateSchema(attributes, shouldValidate) {
    const spaceTypeSchema = new SpaceTypeSchema(attributes);
    const errors = spaceTypeSchema.validateSync();
    const isValid = !errors;

    expect(isValid).toBe(shouldValidate);
}