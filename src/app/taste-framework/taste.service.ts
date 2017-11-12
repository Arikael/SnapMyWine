import { Taste } from './taste';
import { TfResponse } from './tf-response';
import { Observable } from 'rxjs/Observable';
import { isNullOrUndefined } from 'util';
import { BaseService } from './base.service';

export class TasteService extends BaseService {

    constructor(db: any) {
        super(db);
    }

    create(tasteObj: { id: string, category: string } | Taste): Promise<any> {

        const taste = tasteObj instanceof Taste ? tasteObj : new Taste(tasteObj.id);
        taste.category = tasteObj.category;

        const response = new TfResponse();

        return this.db.put(taste);
    }

    get(id: string): Promise<any> {
        return this.db.get(id);
    }
}