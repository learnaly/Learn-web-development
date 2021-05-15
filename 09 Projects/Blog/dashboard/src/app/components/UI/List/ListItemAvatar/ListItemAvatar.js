import React from 'react';
import { ListItemAvatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'BlogListItemAvatar' });

export default function BlogListItemAvatar(props) {
    const classes = useStyles();

    return (
        <ListItemAvatar
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

