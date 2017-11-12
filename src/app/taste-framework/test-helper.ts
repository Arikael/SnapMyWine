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
