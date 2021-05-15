import Cookies from 'js-cookie';

export class CookieService {
    domain = '';

    init() {
        this.domain = window.location.host;

        if (this.domain.indexOf('localhost') > -1) this.domain = '';
        else {
            let rootHost = this.domain.split('.');
            rootHost = `${rootHost[rootHost.length - 2]}.${rootHost[rootHost.length - 1]}`;

            this.domain = rootHost;
        }
    }

    set(key, value) {
        const options = { expires: 365 * 101 }; // Expires in 101 years from now

        if (this.domain) options['domain'] = this.domain;

        Cookies.set(key, value, options);
    }

    get(key) {
        return Cookies.get(key);
    }

    delete(key) {
        const options = {};

        if (this.domain) options['domain'] = this.domain;

        Cookies.remove(key, options);
    }
}

export default new CookieService();
