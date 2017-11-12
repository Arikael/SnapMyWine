import { TestHelper } from './test-helper';
import { Taste } from './taste';
import { TasteService } from './taste.service';

describe('taste tests', () => {
    let db: any;
    let taste: Taste;
    let tasteService: TasteService;

    beforeEach(() => {
        db = TestHelper.createTestDb();
        tasteService = new TasteService(db);
    });

    afterEach((done) => {
        TestHelper.destroyTestDb(db, done);
    });

    it('taste needs to have a category', () => {

        taste = new Taste('Melon');
        taste.category = 'Fruit';

        expect(taste.category).toBeTruthy();
    });

    it('taste _id is in format tastes/_id] when injected via constructor', () => {

        taste = new Taste('Melon');

        expect(taste._id).toBe(Taste.idPrefix + '/Melon');
    });

    it('taste _id is in format tastes/_id] when assigned manually', () => {

        taste = new Taste();
        taste.setId('Melon');
        expect(taste._id).toBe(Taste.idPrefix + '/Melon');
    });

    it('taste needs to be unique (_id/key)', (done) => {
        taste = new Taste('Melon');
        taste.category = 'Fruit';
        tasteService.create(taste);

        const newTaste = new Taste('Melon');
        newTaste.category = 'Vegetable';

        tasteService.create(newTaste).catch((error) => {
            expect(error.status).toBe(409);
        });

        done();
    });

    it('taste is fully saved in Db', () => {

        taste = new Taste('Melon');
        taste.category = 'Fruit';
        tasteService.create(taste);

        tasteService.get(taste._id).then((doc) => {
            expect(taste.category).toBe(doc.category);
        });
    });

});