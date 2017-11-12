import { Taste } from './taste';
import { TestHelper } from './test-helper';


describe('tasteFramework test', () => {

    let db: any;

    beforeEach(() => {
        db = TestHelper.createTestDb();
    });

    afterEach((done) => {
        TestHelper.destroyTestDb(db, done);
    });

    it('can store taste', () => {
        const taste = new Taste();
        taste._id = "test";
        taste.category = 'Fruit';
        taste.key = 'Raspberry';

        db.put(taste).then((response) => {
            expect(response.ok).toBeTruthy();
        });
    });

    it('jasmine afterEach destroys DB', () => {

        expect((done) => {
            db.get('test').catch((error) => {
                expect(error.status).toBe(404);
                done();
            });
        });
    });
});