import React from 'react';
import { ListItemSecondaryAction, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'BlogListItemSecondaryAction' });

export default function BlogListItemSecondaryAction(props) {
    const classes = useStyles();

    return (
        <ListItemSecondaryAction
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

