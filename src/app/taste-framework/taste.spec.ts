import { TestHelper } from './test-helper';
import { Taste } from './taste';

describe('taste tests', () => {
    let db: any;

    beforeEach(() => {
        db = TestHelper.createTestDb();
    });

    afterEach((done) => {
        TestHelper.destroyTestDb(db, done);
    });

    it('taste needs to have a category', () => {

        const taste = new Taste('Melon');
        taste.category = 'Fruit';
        
        expect(taste.category).toBeTruthy();
    });

    it('taste _id is in format tastes/_id] when injected via constructor', () => {
        
        const taste = new Taste('Melon');

        expect(taste._id).toBe(Taste.idPrefix + '/Melon');
    });

    it('taste _id is in format tastes/_id] when assigned manually', () => {
        
        const taste = new Taste();
        taste.setId('Melon');
        expect(taste._id).toBe(Taste.idPrefix + '/Melon');
    });

    it('taste needs to be unique (_id/key)', () => {

        expect(true).toBe(false);
    });

    it('taste is fully saved in Db', () => {

        expect(true).toBe(false);
    });

});