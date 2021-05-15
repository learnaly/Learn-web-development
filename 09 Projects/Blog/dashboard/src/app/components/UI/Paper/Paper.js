import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'BlogPaper' });

export default function BlogPaper(props) {
    const classes = useStyles();

    return (
        <Paper
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

