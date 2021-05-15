import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {

    },
}), { name: 'QoolpageCircularProgress' });

export default function QoolpageCircularProgress(props) {
    const classes = useStyles();

    return (
        <CircularProgress
            color='primary'
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

