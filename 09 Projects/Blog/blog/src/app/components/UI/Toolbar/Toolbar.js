import React from 'react';
import { Toolbar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'QoolpageToolbar' });

export default function QoolpageToolbar(props) {
    const classes = useStyles();

    return (
        <Toolbar
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

