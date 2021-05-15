import React from 'react';
import { DialogTitle, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'BlogDialogTitle' });

export default function BlogDialogTitle(props) {
    const classes = useStyles();

    return (
        <DialogTitle
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

