import { TasteCollection } from './taste-collection';
import { TemplateRelation } from './template-relation';
import { TasteRelation } from './taste-relation';
import { isNullOrUndefined } from 'util';

export class Template {
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
    }

    addTaste(tasteId: string, intensity: number, type?: string) {

        const tasteRelation: TasteRelation = {
            intensity: intensity,
            tasteId: tasteId
        };

        this.tastes[type].push(tasteRelation);
    }
}