import React from 'react';
import { LinearProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {

    },
}), { name: 'BlogLinearProgress' });

export default function BlogLinearProgress(props) {
    const classes = useStyles();

    return (
        <LinearProgress
            color='primary'
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

