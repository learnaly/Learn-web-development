import { Subject } from 'rxjs';

import { StorageService, RequestService, AccountService } from '.';
import { getParams, history } from '../utils';
import Config from '../config';

export class AuthService {
    authSub = new Subject();

    getToken() {
        return StorageService.get('token');
    }

    get isLoggedIn() {
        const account = StorageService.get('account');
        const token = StorageService.get('token');

        return !!(account && token);
    }

    async login(data = {}) {
        try {
            const token = await RequestService.post(`${Config.config.api.core}/auth/login`, data);

            if (token.error) throw token.error;

            StorageService.set('token', token.response);

            const account = await AccountService.me();

            StorageService.set('account', account);

            this.authSub.next('login');

            const redirect_to = decodeURIComponent(getParams().redirect_to || '');

            history.push(redirect_to || '/');
        } catch (error) {
            throw error;
        }
    }

    logout() {
        StorageService.delete('token');
        StorageService.delete('account');

        this.authSub.next('logout');
    }
}

export default new AuthService();
