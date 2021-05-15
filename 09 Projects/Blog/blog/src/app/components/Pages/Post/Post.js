import React from 'react';
import { makeStyles } from '@material-ui/styles';
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
    title: {
        textAlign: 'center',
        margin: '55px 0 75px',
    },
    body: {
        whiteSpace: 'pre-wrap',
    },
}), { name: 'Post' });

function Post(props) {
    const classes = useStyles();

    const title = props.post.data.title;
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
            {props.post && <>
                <Typography
                    variant='h1'
                    className={classes.title}
                >
                    {props.post.data.title}
                </Typography>

                <Typography
                    variant='body1'
                    className={classes.body}
                >
                    {props.post.data.body}
                </Typography>
            </>}
        </div>
    </>;
}

export default Post;
