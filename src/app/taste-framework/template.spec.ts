import { TestHelper, arrayEquals } from './test-helper';
import { Template } from './template';

describe('template tests', () => {

    let db: any;
    let template: Template;

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

        template = new Template();

        expect(template.tastes).toBeTruthy();
    });

    it('all baseTemplates added in constructor are saved in .baseTemplates', () => {

        const arr = [
            createEmptyTemplate('template1'),
            createEmptyTemplate('template2'),
            createEmptyTemplate('template3')];
        template = new Template(...arr);

        expect(arrayEquals(arr.map(item => item._id), template.baseTemplates)).toBe(true);
    });

    it('baseTemplates added after constructor are saved in .baseTemplates', () => {

        const arr = [
            createEmptyTemplate('template1'),
            createEmptyTemplate('template2'),
            createEmptyTemplate('template3')];
        template = new Template();

        arr.forEach((element) => {
            template.addBaseTemplate(element);
        });

        expect(arrayEquals(arr.map(item => item._id), template.baseTemplates)).toBe(true);
    });

    it('baseTemplate can\'t be added twice in constructor', () => {

        expect(() => new Template(createEmptyTemplate('template1'),
            createEmptyTemplate('template1'))).toThrowError();
    });

    it('baseTemplate can\'t be added twice after constructor', () => {

        template = new Template(createEmptyTemplate('template1'));

        expect(() => template.addBaseTemplate(createEmptyTemplate('template1'))).toThrowError();
    });

    // what happens when you add a baseTemplate with existing tastes?
    it('adding a baseTemplate adds all tastes from it', () => {

        expect(true).toBe(false);
    });

    // see above, if you add it manually this holds true
    it('taste can\'t be added twice', () => {

        expect(true).toBe(false);
    });

    it('template can be saved', () => {

        expect(true).toBe(false);
    });

    it('all data of a template can be retrieved from DB', () => {

        expect(true).toBe(false);
    });
});

function createEmptyTemplate(id: string) {
    const template = new Template();
    template._id = id;

    return template;
}