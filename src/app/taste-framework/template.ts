import { TasteCollection } from './taste-collection';
import { TemplateRelation } from './template-relation';

export class Template {
    _id: string;
    key: string;
    baseTemplates: TemplateRelation[];
    tastes: TasteCollection;
}