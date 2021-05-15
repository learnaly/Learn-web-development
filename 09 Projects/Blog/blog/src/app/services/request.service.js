import axios from 'axios';

const API = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});

API.interceptors.request.use(
    config => config,
    error => ({ error: error.response })
);

API.interceptors.response.use(
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
