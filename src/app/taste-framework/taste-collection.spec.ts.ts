import { TestHelper } from './test-helper';

describe('tasteCollection Tests', () => {

    let db: any;

    beforeEach(() => {
        db = TestHelper.createTestDb();
    });

    afterEach((done) => {
        TestHelper.destroyTestDb(db, done);
    });

    it('tasteRelations properties are all filled', () => {

        expect(true).toBe(false);
    });

    it('nose tastes are not null/undefined', () => {

        expect(true).toBe(false);
    });

    it('mouth tastes are not null/undefined', () => {

        expect(true).toBe(false);
    });

    it('after tastes are not null/undefined', () => {

        expect(true).toBe(false);
    });

    it('[all] tastes are not null/undefined', () => {

        expect(true).toBe(false);
    });

    it('nose tastes are unique', () => {

        expect(true).toBe(false);
    });

    it('mouth tastes are unique', () => {

        expect(true).toBe(false);
    });

    it('after tastes are unique', () => {

        expect(true).toBe(false);
    });

    it('[all] tastes are unique', () => {

        expect(true).toBe(false);
    });


    // define further
    it('tasteRelations.all overrules all other tasteRelations', () => {

        expect(true).toBe(false);
    });
});