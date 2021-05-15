import React from 'react';
import { AppBar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'BlogAppBar' });

export default function BlogAppBar(props) {
    const classes = useStyles();

    return (
        <AppBar
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

