const PouchDB = require('pouchdb-browser').default;
const memory = require('pouchdb-adapter-memory').default;
PouchDB.plugin(memory);

export class TestHelper {
    static createTestDb() {
        return new PouchDB('test', { adapter: 'memory' });
    }

    static destroyTestDb(db: any, done: DoneFn) {
        db.destroy().then(() => {
            done();
        });
    }
}

export function arrayEquals(arr1: any[], arr2: any[]): boolean {

    return arr1.length === arr2.length
        && arr1.filter(item => arr2.indexOf(item) === -1).length === 0;
}
