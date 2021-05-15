import React from 'react';
import { AppBar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'QoolpageAppBar' });

export default function QoolpageAppBar(props) {
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

