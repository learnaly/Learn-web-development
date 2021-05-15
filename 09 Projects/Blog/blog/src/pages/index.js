import React from 'react';

import { Posts } from '../app/components';
import { PostService } from '../app/services';

const Page = props => <Posts {...props} />;

export async function getServerSideProps(context) {
    try {
        const { req } = context;
        const props = {};

        const _posts = await PostService.getManyPublic();

        props.posts = _posts;

        return { props };
    } catch (error) {
        console.log(error);
    }
}

export default Page;
