import React from 'react';
import { Dialog, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
    paper: {
        background: theme.palette.type === 'dark' ? theme.palette.background.secondary : theme.palette.background.primary,
    },
}), { name: 'BlogDialog' });

export default function BlogDialog(props) {
    const classes = useStyles();

    return (
        <Dialog
            classes={{
                root: classes.root,
                paper: classes.paper,
            }}
            scroll='paper'
            {...props}
        />
    );
}

