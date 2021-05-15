import { RequestService } from '../services';
import Config from '../config';

export class PostService {
    cache = {};

    clear() {
        this.cache = {};
    }

    async getManyPublic() {
        const posts = await RequestService.get(`${Config.config.api.core}/posts/public`);

        if (posts.error) throw posts.error;

        return posts;
    }

    async getPublic(id) {
        const post = await RequestService.get(`${Config.config.api.core}/posts/public/${id}`);

        if (post.error) throw post.error;

        return post.response;
    }
}

export default new PostService();
