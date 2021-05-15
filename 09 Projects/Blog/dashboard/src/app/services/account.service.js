import { BehaviorSubject } from 'rxjs';

import { RequestService } from '../services';
import Config from '../config';

export class AccountService {
    accountSub = new BehaviorSubject();
    cache = {};

    constructor() {
        let account;

        try {
            account = JSON.parse(window.localStorage.getItem('Blog__account'));
        } catch (error) { }

        this.accountSub.next(account);
    }

    clear() {
        this.cache = {};
    }

    get account() {
        return this.accountSub.getValue();
    }

    async create(data) {
        const account = await RequestService.post(`${Config.config.api.core}/accounts`, data);

        if (account.error) throw account.error;

        return account.response;
    }

    async me() {
        const account = await RequestService.get(`${Config.config.api.core}/accounts/me`);

        if (account.error) throw account.error;

        return account.response;
    }
}

export default new AccountService();
