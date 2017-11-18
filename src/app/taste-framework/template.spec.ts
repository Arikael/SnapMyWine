import { TestHelper, arrayEquals } from './test-helper';
import { Template } from './template';
import { Taste, BaseTaste } from './taste';
import { isNullOrUndefined } from 'util';

describe('template tests', () => {

    let db: any;
    let template: Template;
    let defaultBaseTaste: any;

    const defaultTastes = [
        {
            _id: 'Raspberry',
            category: 'Fruit',
            type: 'nose',
            intensity: 4
        },
        {
            _id: 'Melon',
            category: 'Fruit',
            type: 'mouth',
            intensity: 1,
        },
        {
            _id: 'Gras',
            category: 'Vegetabil',
            type: 'after',
            intensity: 5,
        },
        {
            _id: 'Graphite',
            category: 'Earth',
            type: 'all',
            intensity: 8
        }
    ];

    beforeEach(() => {
        db = TestHelper.createTestDb();

        defaultBaseTaste = {
            _id: 'test',
            category: 'test'
        };
    });

    afterEach((done) => {
        TestHelper.destroyTestDb(db, done);
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

    it('adding tastes via addTaste adds it to the appropriate tastecollection', () => {

        template = new Template();

        addDefaultTastes(template);

        defaultTastes.forEach(taste => {
            const addedTaste = getTasteFromTemplate(template, taste);
            expect(addedTaste).toBeTruthy();
        });
    });

    it('added tastes via addTastes are completly stored (with intensity and _id) ', () => {

        template = new Template();

        addDefaultTastes(template);

        defaultTastes.forEach(taste => {
            const addedTaste = getTasteFromTemplate(template, taste);
            expect(addedTaste.tasteId).toEqual(taste._id);
            expect(addedTaste.intensity).toEqual(taste.intensity);
        });
    });

    it('adding a taste wihout a type adds it to the "all" templateCollection', () => {

        template = new Template();

        expect(() => template.addTaste(defaultBaseTaste, 1)).not.toThrow();
        const tasteToTest = { ...defaultBaseTaste, type: 'all' };
        const addedTaste = getTasteFromTemplate(template, tasteToTest);
        expect(addedTaste).toBeTruthy();
    });

    it('adding a taste with a non existant type throws an error', () => {

        template = new Template();
        expect(() => template.addTaste(defaultBaseTaste, 1, 'non-existant')).toThrow();
    });

    it('adding a taste with an intensity < 1 throws an error', () => {
        template = new Template();

        expect(() => template.addTaste(defaultBaseTaste, -1)).toThrow();
    });

    it('adding a taste with an intensity > 10 throws an error', () => {
        template = new Template();

        expect(() => template.addTaste(defaultBaseTaste, 11)).toThrow();
    });

    // what happens when you add a baseTemplate with existing tastes?
    it('adding a baseTemplate adds all tastes from it', () => {

        const template1 = new Template();
        addDefaultTastes(template1);
        const template2 = new Template(template1);
        let success = false;
        defaultTastes.forEach(taste => {
            success = !isNullOrUndefined(getTasteFromTemplate(template2, taste));
        });

        expect(success).toBe(true);
    });

    // see above, if you add it manually this holds true
    it('taste can\'t be added twice', () => {

        expect(true).toBe(false);
    });

    // helpers
    function addDefaultTastes(t: Template) {
        defaultTastes.forEach(taste => {
            t.addTaste(taste, taste.intensity, taste.type);
        });
    }
});

function createEmptyTemplate(id: string) {
    const template = new Template();
    template._id = id;

    return template;
}

function getTasteFromTemplate(t: Template, taste: { _id: string, category: string, type: string }) {
    return t.tastes[taste.type].find(item => item.tasteId === taste._id);
}