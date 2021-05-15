import { RequestService } from '../services';
import Config from '../config';

export class PostService {
    cache = {};

    clear() {
        this.cache = {};
    }

    async create(data) {
        const post = await RequestService.post(`${Config.config.api.core}/posts`, data);

        if (post.error) throw post.error;

        return post.response;
    }

    async getMany() {
        const posts = await RequestService.get(`${Config.config.api.core}/posts`);

        if (posts.error) throw posts.error;

        return posts;
    }

    async get(id) {
        const post = await RequestService.get(`${Config.config.api.core}/posts/${id}`);

        if (post.error) throw post.error;

        return post.response;
    }

    async update(id, data) {
        const post = await RequestService.put(`${Config.config.api.core}/posts/${id}`, data);

        if (post.error) throw post.error;

        return post.response;
    }

    async delete(id) {
        const post = await RequestService.delete(`${Config.config.api.core}/posts/${id}`);

        if (post.error) throw post.error;

        return post.response;
    }
}

export default new PostService();
