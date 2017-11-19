import { TasteRelation } from '../taste-relation';

export interface TasteDuplicateResolver {
    resolve(taste: TasteRelation, collection: TasteRelation[]): TasteRelation;
}