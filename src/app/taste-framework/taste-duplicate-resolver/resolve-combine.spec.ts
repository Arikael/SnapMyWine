import { TasteRelation } from '../taste-relation';
import { TasteDuplicateResolver } from './taste-duplicate-resolver';
import { resolveCname } from 'dns';
import { ResolveCombineResolver } from './resolve-combine-resolver';
import { isNullOrUndefined } from 'util';

describe('taste-duplicate-resolver: resolve-combine', () => {

    it('tastes get combined', () => {

        const taste: TasteRelation = {
            tasteId: 'Melon',
            intensity: 5
        };

        let existantTastes: TasteRelation[] = [
            {
                tasteId: 'Bread',
                intensity: 4
            },
            {
                tasteId: 'Raspberry',
                intensity: 8,
            },
            {
                tasteId: 'Melon',
                intensity: 2
            },
            {
                tasteId: 'Honey',
                intensity: 3
            }
        ];

        const resolver: TasteDuplicateResolver = new ResolveCombineResolver();
        resolver.resolve(taste, existantTastes);
        expect(existantTastes.find(item => item.tasteId === 'Melon').intensity === 5);
    });
});