import { TasteDuplicateResolver } from './taste-duplicate-resolver';
import { TasteRelation } from '../taste-relation';
import { isNullOrUndefined } from 'util';

export class ResolveCombineResolver implements TasteDuplicateResolver {
    resolve(taste: TasteRelation, collection: TasteRelation[]): TasteRelation {

        let taste2 = collection.find(item => item.tasteId === taste.tasteId);

        if (isNullOrUndefined(taste2)) {
            collection.push(taste);

            return taste;
        }

        if (taste.tasteId === taste2.tasteId) {
            const newIntensity = Math.ceil((taste.intensity + taste2.intensity) / 2);

            taste2.intensity = newIntensity;

            return taste2;

        }

        return taste;
    }
}