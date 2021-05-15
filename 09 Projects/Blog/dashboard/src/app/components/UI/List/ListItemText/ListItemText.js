import React from 'react';
import { ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.text.primary,
    },
}), { name: 'BlogListItemText' });

export default function BlogListItemText(props) {
    const classes = useStyles();

    return (
        <ListItemText
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

