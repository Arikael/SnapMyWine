import { isNullOrUndefined } from 'util';

export interface BaseTaste {
    _id: string;
    category: string;
}

export class Taste implements BaseTaste {

    static idPrefix = 'tastes';

    constructor(id?: string) {
        if (!isNullOrUndefined(id)) {

            this.setId(id);
        }
    }

    _id: string;
    category: string;

    get key(): string {
        if (this._id.indexOf('/') === -1) {
            return this._id;
        }

        return this._id.substring(this._id.lastIndexOf('/') + 1);
    }

    setId(id: string) {

        if (id.indexOf('tastes') > -1) {
            throw Error('id may not contain the word ' + Taste.idPrefix);
        }

        this._id = Taste.idPrefix + '/' + id;
    }
}