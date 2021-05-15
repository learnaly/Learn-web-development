import React from 'react';
import { Toolbar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'BlogToolbar' });

export default function BlogToolbar(props) {
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

