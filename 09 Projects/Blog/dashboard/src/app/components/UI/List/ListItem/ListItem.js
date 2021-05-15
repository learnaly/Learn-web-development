import React from 'react';
import { ListItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'BlogListItem' });

export default function BlogListItem(props) {
    const classes = useStyles();

    return (
        <ListItem
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

