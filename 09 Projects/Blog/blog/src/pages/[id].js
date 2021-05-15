import React from 'react';

import { Post } from '../app/components';
import { PostService } from '../app/services';

const Page = props => <Post {...props} />;

export async function getServerSideProps(context) {
    const {
        params = {},
    } = context;
    const {
        id,
    } = params;

    let post;

    try {
        post = await PostService.getPublic(id);
    } catch (error) {
        // console.error(error);
    }

    const props = {};

    if (id) props.id = id;
    if (post) props.post = post;

    return { props };
}

export default Page;
