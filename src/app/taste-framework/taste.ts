import { isNullOrUndefined } from 'util';

export class Taste {

    static idPrefix = 'tastes';

    constructor(id?: string) {
        if (!isNullOrUndefined(id)) {

            this.setId(id);
        }
    }

    _id: string;
    category: string;

    setId(id: string) {

        if (id.indexOf('tastes') > -1) {
            throw Error('id may not contain the word ' + Taste.idPrefix);
        }

        this._id = Taste.idPrefix + '/' + id;
    }
}