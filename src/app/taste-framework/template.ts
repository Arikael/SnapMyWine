import { TasteCollection } from './taste-collection';
import { TemplateRelation } from './template-relation';
import { TasteRelation } from './taste-relation';
import { isNullOrUndefined } from 'util';
import { Taste } from './taste';

export class Template {
    static defaultTasteType = 'all';
    _id: string;
    baseTemplates: string[];
    tastes: TasteCollection;

    // how do we handle identical tastes?
    // - combine intensities
    // - overwrite
    // - ignore
    // create strategy
    constructor(...baseTemplates: Template[]) {

        this.baseTemplates = [];
        this.tastes = {
            after: [],
            all: [],
            mouth: [],
            nose: []
        };

        if (!isNullOrUndefined(baseTemplates)) {
            baseTemplates.forEach((template) => {

                this.addBaseTemplate(template);
            });
        }
    }

    addBaseTemplate(template: Template) {

        if (this.baseTemplates.indexOf(template._id) > -1) {
            throw Error('baseTemplate already added');
        }

        this.baseTemplates.push(template._id);

        for (const prop of Object.keys(template.tastes)) {
            this.addTasteRelation(template.tastes[prop], prop);
        }
    }

    addTasteRelation(tastes: TasteRelation[], type: string) {
        tastes.forEach(taste => {
            this.addTaste({
                _id: taste.tasteId,
                category: null // TODO Check if we need category
            }, taste.intensity, type);
        });
    }

    addTaste(taste: { _id: string, category: string }, intensity: number, type?: string) {

        const tasteRelation: TasteRelation = {
            intensity: intensity,
            tasteId: taste._id
        };

        if (isNullOrUndefined(type)) {
            type = Template.defaultTasteType;
        }

        if (isNullOrUndefined(this.tastes[type])) {
            throw Error(`the supplied taste type '${type}' does not exists`);
        }

        this.tastes[type].push(tasteRelation);
    }
}