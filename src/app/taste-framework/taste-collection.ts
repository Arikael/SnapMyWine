import { TasteRelation } from './taste-relation';

export interface TasteCollection {
    nose: TasteRelation[];
    mouth: TasteRelation[];
    after: TasteRelation[];
    all: TasteRelation[];
}