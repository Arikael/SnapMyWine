import { TestHelper } from './test-helper';

describe('tasteRelation tests', () => {

    let db: any;

    beforeEach(() => {
        db = TestHelper.createTestDb();
    });

    afterEach((done) => {
        TestHelper.destroyTestDb(db, done);
    });

    it('tasteRelation intensity must be between 0 and 10', () => {

        expect(true).toBe(false);
    });

    it('retrieving a taste by tasteRelations tasteId works', () => {

        expect(true).toBe(false);
    });
});