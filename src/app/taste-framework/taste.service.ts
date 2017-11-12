import { Taste } from './taste';
import { TfResponse } from './tf-response';
import { Observable } from 'rxjs/Observable';
import { isNullOrUndefined } from 'util';

export class TasteService {

    constructor(private db: any) {

    }

    create(tasteObj: { id: string, category: string } | Taste ): Observable<TfResponse> {

        const taste = tasteObj instanceof Taste ? tasteObj : new Taste(tasteObj.id);
        taste.category = tasteObj.category;
       
        const response = new TfResponse();

        return this.db.get(taste._id).catch((error) => {

            if (error.status === 404) {

                return this.db.put(taste);
            }

            throw error;
        }).then((result) => {

            response.ok = true;

            return response;
        }, (error) => {
            return response.ok = false;
        });

    }
}