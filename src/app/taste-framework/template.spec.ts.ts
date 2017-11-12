import { TestHelper } from './test-helper';

describe('template tests', () => {

    let db: any;

    beforeEach(() => {
        db = TestHelper.createTestDb();
    });

    afterEach((done) => {
        TestHelper.destroyTestDb(db, done);
    });

    it('template is unique (_id/key)', () => {

        expect(true).toBe(false);
    });

    it('tasteCollection of templates cannot be null/empty/undefined', () => {

        expect(true).toBe(false);
    });

    it('templates baseTemplates can be empty but not null/undefined', () => {

        expect(true).toBe(false);
    });

    it('template can be saved', () => {

        expect(true).toBe(false);
    });

    it('all data of a template can be retrieved from DB', () => {

        expect(true).toBe(false);
    });

    it('using the same template as base twice results in adding it only once')
});