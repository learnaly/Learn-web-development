import React from 'react';
import { Divider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'BlogDivider' });

export default function BlogDivider(props) {
    const classes = useStyles();

    return (
        <Divider
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

