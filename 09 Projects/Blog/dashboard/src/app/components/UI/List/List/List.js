import React from 'react';
import { List, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'BlogList' });

export default function BlogList(props) {
    const classes = useStyles();

    return (
        <List
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

