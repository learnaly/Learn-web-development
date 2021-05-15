import React from 'react';
import { Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        '& img': {
            maxWidth: '100%',
            height: 'auto',
        },
    },
}), { name: 'BlogAvatar' });

export default function BlogAvatar(props) {
    const classes = useStyles();


    return (
        <Avatar
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

