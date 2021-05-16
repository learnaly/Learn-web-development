import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import { Typography } from '../../';

const useStyles = makeStyles(theme => ({
    root: {
        ...theme.mixins.main,
        width: '100%',
        backgroundColor: theme.palette.background.primary,
        maxWidth: theme.breakpoints.values.lg,
        margin: '0 auto',
        padding: '0 24px',
        paddingTop: 104,
    },
    post: {
        color: theme.palette.text.primary,
        padding: '74px 0',
        borderBottom: `5px solid #e103ff`,
    },
}), { name: 'Posts' });

function Posts(props) {
    const classes = useStyles();

    const title = 'Posts';
    const description = `Blog posts.`;

    return <>
        <NextSeo
            title={title}
            description={description}
            openGraph={{
                title,
                description,
                images: [
                    { url: '/assets/images/social.png' },
                ],
                site_name: 'Qoolpage',
            }}
        />

        <div className={classes.root}>
            {props.posts && props.posts.response.map((post, index) => (
                <Link
                    href={`/${post.id}`}
                    passHref
                    key={index}
                >
                    <a
                        className={classes.post}
                    >
                        <Typography
                            variant='h1'
                        >
                            {post.title || post.data.title}
                        </Typography>
                    </a>
                </Link>
            ))}
        </div>
    </>;
}

export default Posts;
