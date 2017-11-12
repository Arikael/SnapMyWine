import { TasteCollection } from './taste-collection';
import { TemplateProductRelation } from './template-product-relation';
import { TemplateRelation } from './template-relation';

export class Product {
    _id: string;
    name: string;
    image: string;
    rating: number;
    // wirklich nötig?
    baseTemplate: TemplateRelation;
    templates: TemplateProductRelation[];
    tastes: TasteCollection;
}