import axios from 'axios';
import NProgress from 'nprogress';

import { AuthService } from '../services';

NProgress.configure({
    showSpinner: false,
});

const API = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});

API.interceptors.request.use(
    config => {
        NProgress.start();

        const token = AuthService.getToken();

        if (token) config.headers['Authorization'] = `API_TOKEN ${token}`;

        return config;
    },
    error => {
        NProgress.done();
        return ({ error: error.response })
    }
);

API.interceptors.response.use(
    response => {
        NProgress.done();

        if (response.data) return response.data;

        return response;
    },
    error => {
        NProgress.done();
        return ({ error: error.response })
    }
);


const APINoAuth = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});

APINoAuth.interceptors.response.use(
    response => {
        if (response.data) return response.data;

        return response;
    },
    error => ({ error: error.response })
);

export class RequestService {

    get = (url, options = {}) => API.get(url, options);

    post = (url, body, options = {}) => API.post(url, body, options);

    delete = (url, options = {}) => API.delete(url, options);

    put = (url, body, options = {}) => API.put(url, body, options);

}

export default new RequestService();
