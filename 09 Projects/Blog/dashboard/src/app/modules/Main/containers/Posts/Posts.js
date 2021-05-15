import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';

import { Link, Title, Typography, Button } from '../../../../components';
import { PostService } from '../../../../services';
import { history } from '../../../../utils';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    posts: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: theme.breakpoints.values.form,
        margin: '0 auto',
    },
    post: {
        cursor: 'pointer',
        color: theme.palette.text.primary,
        fontSize: 30,
        padding: '24px 0',
    },
}), { name: 'Posts' });

export default function Posts() {
    const classes = useStyles();
    const [posts, setPosts] = useState();

    useEffect(() => {
        init();
        // eslint-disable-next-line
    }, []);

    const init = async () => {
        const _posts = await PostService.getMany();

        setPosts(_posts);
    };

    return (
        <div className={classes.root}>
            <Title
                title='All posts'
                options={<>
                    <Button
                        onClick={() => history.push('/posts/new')}
                        variant='outlined'
                    >
                        Create new post
                    </Button>
                </>}
            />

            <div className={classes.posts}>
                {posts && posts.response.map((post, index) => (
                    <Link
                        component={Typography}
                        variant='h1'
                        onClick={() => history.push(`/posts/${post.id}`)}
                        className={classes.post}
                        key={index}
                    >
                        {post.data.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}
