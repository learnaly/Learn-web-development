import { Subject, BehaviorSubject } from 'rxjs';

export class StorageService {
    namespace = 'BLOG__';
    storage = localStorage;
    crumbSub = new Subject();
    userTheme = new BehaviorSubject('light');

    constructor(_storage) {
        this.storage = _storage || window.localStorage;
    }

    setUserTheme(theme) {
        if (this.storage) {
            if (['light', 'dark', 'auto'].indexOf(theme) > -1) {
                this.userTheme.next(theme);
            }
        }
    }

    set(key, value) {
        this.storage.setItem(`${this.namespace}${key}`, JSON.stringify(value));
    }

    put(key, value) {
        if (!this.get(key)) {
            this.storage.setItem(`${this.namespace}${key}`, JSON.stringify(value));
        } else {
            return false;
        }
    }

    get(key) {
        try {
            return JSON.parse(this.storage.getItem(`${this.namespace}${key}`));
        } catch (error) {
            return this.storage.getItem(`${this.namespace}${key}`);
        }
    }

    getAll() {
        const items = Object.keys(this.storage).reduce((acc, key) => {
            if (key.indexOf(this.namespace) > -1) {
                acc.push({
                    key,
                    value: this.storage.getItem(key),
                });
            }

            return acc;
        }, []);

        return items;
    }

    delete(key) {
        this.storage.removeItem(`${this.namespace}${key}`);
    }

    clear() {
        const items = this.getAll();

        for (const item of items) {
            if (this.notDeleteOnClear.indexOf(item.key) === -1) this.storage.removeItem(item.key);
        }
    }

    // Warning: this will delete other websites data as well on localhost only, as for actual domains, each domain has its own localStorage space, so namespaces isn't necessary
    clearEntireStorage() {
        this.storage.clear();
    }
}

export const SessionStorageService = new StorageService(window.sessionStorage);

export default new StorageService();
